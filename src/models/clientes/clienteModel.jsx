/**
 * @brief Modelo que sirve como base para inicializar los datos de un formulario relacionado con clientes.
 * @brief Puedes adaptar o extender este modelo según tus necesidades específicas en el frontend.
 * @returns Las propiedades que inicializan un modelo de datos para clientes.
 */
const clienteModel = () => {
    return {
      id: null,  // Puedes dejarlo como null si estás creando un nuevo cliente o asignar un valor si estás editando.
      nombre: '',
      direccion: '',
      telefono: '',
      correo_electronico: '',
      historial_compras: ''
    };
  }
  
  export default clienteModel;
  