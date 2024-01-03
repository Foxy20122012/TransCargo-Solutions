/**
 * @brief Modelo que sirve como base para inicializar los datos de un formulario relacionado con empleados.
 * @brief Puedes adaptar o extender este modelo según tus necesidades específicas en el frontend.
 * @returns Las propiedades que inicializan un modelo de datos para empleados.
 */
const empleadoModel = () => {
    return {
      id: null,  // Puedes dejarlo como null si estás creando un nuevo empleado o asignar un valor si estás editando.
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: '',
      correo_electronico: '',
      puesto: '',
      salario: null  // Puedes dejarlo como null o asignar un valor decimal si es necesario.
    };
  }
  
  export default empleadoModel;

  