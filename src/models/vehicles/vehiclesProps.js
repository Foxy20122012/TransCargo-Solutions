const vehiclesProps = [
    {
      text: 'Marca',
      i18n: 'etiquetas.marca',
      value: 'Marca',
      inputProps: {
        type: 'text',
        required: true,
        minLength: 2,
        maxLength: 50,
        autoComplete: 'off',
        autoFocus: false,
      },
    },
    {
      text: 'Descripcion',
      i18n: 'etiquetas.descripcion',
      value: 'Descripcion',
      inputProps: {
        type: 'text',
        required: false, // Cambia a true si es necesario
        minLength: 2,
        maxLength: 100, // Ajusta según tus necesidades
        autoComplete: 'off',
        autoFocus: false,
      },
    },
    {
      text: 'Modelo',
      i18n: 'etiquetas.modelo',
      value: 'Modelo',
      inputProps: {
        type: 'text',
        required: false, // Cambia a true si es necesario
        minLength: 2,
        maxLength: 50,
        autoComplete: 'off',
        autoFocus: false,
      },
    },
    {
      text: 'Placa',
      i18n: 'etiquetas.placa',
      value: 'Placa',
      inputProps: {
        type: 'text',
        required: false, // Cambia a true si es necesario
        minLength: 2,
        maxLength: 10, // Ajusta según tus necesidades
        autoComplete: 'off',
        autoFocus: false,
      },
    },
    {
      text: 'AnioFabricacion',
      i18n: 'etiquetas.anioFabricacion',
      value: 'AnioFabricacion',
      inputProps: {
        type: 'number',
        required: false, // Cambia a true si es necesario
        min: 1900, // Ajusta según tus necesidades
        max: new Date().getFullYear(), // Ajusta según tus necesidades
        autoComplete: 'off',
        autoFocus: false,
      },
    },
    {
      text: 'CapacidadCarga',
      i18n: 'etiquetas.capacidadCarga',
      value: 'CapacidadCarga',
      inputProps: {
        type: 'text',
        required: false, // Cambia a true si es necesario
        minLength: 2,
        maxLength: 20, // Ajusta según tus necesidades
        autoComplete: 'off',
        autoFocus: false,
      },
    },
    {
      text: 'TipoCombustible',
      i18n: 'etiquetas.tipoCombustible',
      value: 'TipoCombustible',
      inputProps: {
        type: 'text',
        required: false, // Cambia a true si es necesario
        minLength: 2,
        maxLength: 20, // Ajusta según tus necesidades
        autoComplete: 'off',
        autoFocus: false,
      },
    },
    {
      text: 'EstadoVehiculo',
      i18n: 'etiquetas.estadoVehiculo',
      value: 'EstadoVehiculo',
      inputProps: {
        type: 'text',
        required: false, // Cambia a true si es necesario
        minLength: 2,
        maxLength: 20, // Ajusta según tus necesidades
        autoComplete: 'off',
        autoFocus: false,
      },
    },
    {
      text: 'KilometrajeActual',
      i18n: 'etiquetas.kilometrajeActual',
      value: 'KilometrajeActual',
      inputProps: {
        type: 'number',
        required: false, // Cambia a true si es necesario
        min: 0, // Ajusta según tus necesidades
        autoComplete: 'off',
        autoFocus: false,
      },
    },
    // Añade más propiedades según sea necesario
  ];
  
  export default vehiclesProps;
  