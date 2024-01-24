const mantenimientoProps = [
    {
      label: "ID",
      name: "id",
      type: "number",
      required: true,
    },
    {
      label: "Unidad Asignada",
      name: "unidad_asignada",
      type: "number",
      required: true,
    },
    {
      label: "Tipo de Mantenimiento",
      name: "tipo_mantenimiento",
      type: "text",
      required: true,
    },
    {
      label: "Descripción de Mantenimiento",
      name: "descripcion_mantenimiento",
      type: "textarea",
      required: true,
    },
    {
      label: "Fecha de Mantenimiento",
      name: "fecha_mantenimiento",
      type: "date",
      required: true,
    },
    {
      label: "Costo de Mantenimiento",
      name: "costo_mantenimiento",
      type: "number",
      required: true,
    },
  ];
  
  export default mantenimientoProps;
  