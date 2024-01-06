/**
 * @brief Propiedades que sirven como base para inicializar los datos relacionados con las MateriasPrimas.
 * @brief Estas propiedades no necesitan corresponder uno a uno con campos de estructuras de persistencia o pantallas.
 * @returns Las propiedades que inicializan un modelo de datos relacionado con MateriasPrimas.
 */
const materiasPrimasProps = [
  {
    label: "Piloto Asignado",
    name: "nombre",
    type: "text",
    maxLength: 255,
  },
  {
    label: "Unidad Asignada",
    name: "cantidad_inicial",
    type: "text",
    maxLength: 255,
  },
  {
    label: "Hora Salida",
    name: "proveedor_id",
    type: "text",
    maxLength: 255,
  },
  {
    label: "Hora Llegada",
    name: "fecha_recepcion",
    type: "text",
    maxLength: 255,
  },
  {
    label: "Punto Salida",
    name: "precio_unitario",
    type: "text",
    maxLength: 255,
  },
  {
    label: "Odometro Salida",
    name: "fecha_vencimiento",
    type: "text",
    maxLength: 255,
  },
  {
    label: "Dia",
    name: "ubicacion_almacen",
    type: "text",
    maxLength: 100,
  },
  {
    label: "Mes",
    name: "descripcion",
    type: 'select',
    options: [
      { value: '', label: 'Sin Información' },
      { value: 'Enero', label: 'Enero' },
      { value: 'Febrero', label: 'Febrero' },
      { value: 'Marzo', label: 'Marzo' },
      { value: 'Abril', label: 'Abril' },
      { value: 'Mayo', label: 'Mayo' },
      { value: 'Junio', label: 'Junio' },
      { value: 'Julio', label: 'Julio' },
      { value: 'Agosto', label: 'Agosto' },
      { value: 'Septiembre', label: 'Septiembre' },
      { value: 'Octubre', label: 'Octubre' },
      { value: 'Noviembre', label: 'Noviembre' },
      { value: 'Diciembre', label: 'Diciembre' },
    ],
    maxLength: 500,
  },
  {
    label: "Año",
    name: "cuenta",
    type: 'select',
    options: [
      { value: '', label: 'Sin Información' },
      { value: '2024', label: '2024' },
      { value: '2025', label: '2025' },
      { value: '2026', label: '2026' },
      { value: '2027', label: '2027' },
      { value: '2028', label: '2028' }
    ],
    maxLength: 255,
  },
  {
    label: "Km De Ida",
    name: "folio_interno",
    type: "text",
    maxLength: 255,
    readOnly: true,
  },
  {
    label: "Destino",
    name: "destino",
    type: "text",
    maxLength: 255,
  },
  {
    label: "Odometro Llegada",
    name: "odometro_llegada",
    type: "text",
    maxLength: 255,
  },
  {
    label: "Descarga pagada",
    name: "descarga_pagada",
    type: "text",
    maxLength: 50,
  },
  {
    label: "Valor Viaje",
    name: "valor_viaje",
    type: "text",
    maxLength: 255,
  },
  {
    label: "Ganancia Viaje",
    name: "ganancia_viaje",
    type: "text",
    maxLength: 255,
  },
  {
    label: "Numero De Factura",
    name: "numero_de_factura",
    type: "text",
    maxLength: 255,
  },
];

export default materiasPrimasProps;
