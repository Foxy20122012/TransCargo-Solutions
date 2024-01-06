const fetchedHeaders = () => {
  return [
    { text: "ID", value: "id" },
    { text: "Piloto Asignado", value: "nombre" },
    { text: "Unidad Asignada", value: "cantidad_inicial" },
    { text: "Hora De Salida", value: "proveedor_id" },
    { text: "Hora De Llegada", value: "fecha_recepcion" },
    { text: "Folio Interno", value: "codigo_unidad" },
    { text: "Punto de salida", value: "precio_unitario" },
    { text: "Odometro De Salida", value: "fecha_vencimiento" },
    { text: "Dia", value: "ubicacion_almacen" },
    { text: "Mes", value: "descripcion" },
    { text: "Año", value: "cuenta" },
    { text: "Km De Ida", value: "folio_interno" },
    { text: "Destino", value: "destino" },
    { text: "Odometro Llegada", value: "odometro_llegada" },
    { text: "Descarga Pagada", value: "descarga_pagada" },
    { text: "Valor Viaje", value: "valor_viaje" },
    { text: "Ganancia Viaje", value: "ganancia_viaje" },
    { text: "Tipo de Factura", value: "numero_de_factura" },
    // Puedes agregar más cabeceras según tus necesidades
  ];
};

export default fetchedHeaders;
