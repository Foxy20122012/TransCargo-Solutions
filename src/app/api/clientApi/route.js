// Importa los módulos necesarios
import { conn } from '../../../libs/mysql'; // Asegúrate de importar tu conexión MySQL desde la ubicación adecuada

// Función para ejecutar el procedimiento almacenado
const executeSPR_I18N_S = async (param1, param2) => {
  try {
    // Ejecuta el procedimiento almacenado 'SPR_I18N_S' utilizando 'conn'
    const result = await conn.query('CALL SPR_I18N_S(?, ?)', [param1, param2]); // Asegúrate de pasar los parámetros correctos

    // Si deseas, puedes manejar los resultados aquí o simplemente devolverlos
    console.log('Resultado de la consulta:', result);

    return result; // Devuelve los resultados obtenidos

  } catch (error) {
    console.error('Error al ejecutar el procedimiento almacenado:', error);
    throw error; // Lanza el error para que pueda ser manejado por la capa superior
  }
};

export default executeSPR_I18N_S; // Exporta la función para ser utilizada en otros módulos si es necesario
