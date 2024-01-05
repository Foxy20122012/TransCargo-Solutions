import Cookie from 'js-cookie';
import functions from 'v-functions';
import { execute } from '../helper/clientApi';
import presets from './globalPresets';

/**
 * @brief Objeto con funciones comunes de ambiente
 */
const environment = {
  /**
   * @brief Obtiene el token de los Cookies y el usuario del LocalStorage
   * @param {*} callback funcion a ejecutar cuando se obtuvieron los datos
   * @returns 
   */
  getEnvUser: () => {
    return new Promise((resolve, reject) => {
      const token = Cookie.get(`${process.env.idApp}:${process.env.NODE_ENV}`);
      const user = functions.getDecodeStorage(`${process.env.idApp}/${process.env.NODE_ENV}`);
      if (!token || !user) {
        resolve({ token: undefined, user: undefined, redirectPath: `/login` });
      }
      resolve({ token, user });
    });
  },
  logout: () => {
    return new Promise((resolve, reject) => {
      Cookie.remove(`${process.env.idApp}:${process.env.NODE_ENV}`);
      functions.setEncodeStorage(`${process.env.idApp}/${process.env.NODE_ENV}`, '');
      resolve('/');
    });
  },
  getTime: () => {
    // return (new Date()).getTime()
    return 1668220842700;
  },
  validaResultadoDB: (resultado, i18n, toast, showOKMessage = false) => {
    if (resultado === undefined) {
      if (i18n && toast) {
        toast.error(i18n.t('comun.errorApi'), presets.toaster);
      }
      return false;
    }
    if (Array.isArray(resultado) && resultado.length > 0) {
      if (resultado[0].status === 'ERROR') {
        if (i18n && toast) {
          toast.error(resultado[0].message, presets.toaster);
        }
        return false;
      } else if (resultado[0].status === 'WARNING') {
        if (i18n && toast) {
          toast.warning(resultado[0].message, presets.toaster);
        }
        return false;
      } else if (resultado[0].status === 'OK') {
        if (i18n && toast && showOKMessage === true) {
          toast.success(resultado[0].message, presets.toaster);
        }
      }
    }
    return true;
  },
  validaPermisos: async (token, administra, configura, graba_modifica, consulta) => {
    try {
      // Utiliza la función execute para obtener información relacionada con los permisos
      let permisos = await execute('FUN_INFO_SESION_ENTIDAD', [token]);

      if (permisos === undefined || permisos.length <= 0) {
        return false;
      }

      if (permisos[0].status === 'ERROR' || permisos[0].status === 'WARNING') {
        return false;
      } else {
        permisos = permisos[0];
        // Tu lógica para validar permisos según los roles y configuraciones
        // ...
        return true; // o false, según corresponda a tu lógica
      }
    } catch (error) {
      console.error('Error al validar permisos:', error);
      return false; // o maneja el error según tu necesidad
    }
  },
};

export default environment;
