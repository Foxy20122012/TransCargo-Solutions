

const fetchedHeaders = () => {
    return [
      { text: "ID", value: "id" },
      { text: "estado_pedido", value: "estado_pedido" },
      { text: "codigo_venta", value: "codigo_venta" },
      { text: "codigo_pedido", value: "codigo_pedido" },
      { text: "tipo_pago", value: "tipo_pago" },
      { text: "direccion_envio", value: "direccion_envio" },
      // Puedes agregar más cabeceras según tus necesidades
    ];
  };
  

export default fetchedHeaders;