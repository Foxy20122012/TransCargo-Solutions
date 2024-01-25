const mantenimientoProps = [
    {
      label: "ID",
      name: "id",
      type: "number",
      required: true,
      readOnly: true,
    },
    {
      label: "Unidad Asignada",
      name: "UnidadAsignada",
      type: "number",
      required: true,
    },
    {
      label: "Tipo de Mantenimiento",
      name: "TipoMantenimiento",
      type: "text",
      required: true,
    },
    {
      label: "Descripción de Mantenimiento",
      name: "DescripcionMantenimiento",
      type: "textarea",
      required: true,
    },
    {
      label: "Fecha de Mantenimiento",
      name: "FechaMantenimiento",
      type: "date",
      required: true,
    },
    {
      label: "Costo de Mantenimiento",
      name: "CostoMantenimiento",
      type: "number",
      required: true,
    },
  ];
  
  export default mantenimientoProps;
  