import { MateriasPrimas as MateriasPrimasPrisma } from "@prisma/client";

export type MateriasPrimas = MateriasPrimasPrisma; // Exporta el tipo MateriasPrimas

export type Row = {
  id: number;
  nombre: string | null;
  cantidad_inicial: string | null;
  proveedor_id: string | null;
  fecha_recepcion: string | null;
  codigo_unidad: string | null;
  precio_unitario: string | null;
  fecha_vencimiento: string | null;
  ubicacion_almacen: string | null;
  descripcion: string | null;
  cuenta: string | null;
  folio_interno: string | null;
  destino: string | null;
  odometro_llegada: string | null;
  descarga_pagada: string | null;
  valor_viaje: string | null;
  ganancia_viaje: string | null;
  numero_de_factura: string | null;
};

export const transformMateriasPrimasToRows = (materiasPrimas: MateriasPrimas[]): Row[] => {
  // @ts-ignore
  return materiasPrimas.map((materiaPrima) => ({
    id: materiaPrima.id,
    nombre: materiaPrima.nombre || "",
    cantidad_inicial: materiaPrima.cantidad_inicial || "",
    proveedor_id: materiaPrima.proveedor_id || "",
    fecha_recepcion: materiaPrima.fecha_recepcion || "",
    codigo_unidad: materiaPrima.codigo_unidad || "",
    precio_unitario: materiaPrima.precio_unitario || "",
    fecha_vencimiento: materiaPrima.fecha_vencimiento || "",
    ubicacion_almacen: materiaPrima.ubicacion_almacen || "",
    descripcion: materiaPrima.descripcion || "",
    cuenta: materiaPrima.cuenta || "",
    folio_interno: materiaPrima.folio_interno || "",
    destino: materiaPrima.destino || "",
    odometro_llegada: materiaPrima.odometro_llegada || "",
    descarga_pagada: materiaPrima.descarga_pagada || "",
    valor_viaje: materiaPrima.valor_viaje || "",
    ganancia_viaje: materiaPrima.ganancia_viaje || "",
    numero_de_factura: materiaPrima.numero_de_factura || "",
  }));
};

export type MateriasPrimasModel = keyof Row;

export const materiasPrimasColumns: Record<MateriasPrimasModel, string> = {
  id: "ID",
  nombre: "Nombre",
  cantidad_inicial: "Cantidad Inicial",
  proveedor_id: "Proveedor ID",
  fecha_recepcion: "Fecha de Recepción",
  codigo_unidad: "Código de Unidad",
  precio_unitario: "Precio Unitario",
  fecha_vencimiento: "Fecha de Vencimiento",
  ubicacion_almacen: "Ubicación en Almacén",
  descripcion: "Descripción",
  cuenta: "Cuenta",
  folio_interno: "Folio Interno",
  destino: "Destino",
  odometro_llegada: "Odometro Llegada",
  descarga_pagada: "Descarga Pagada",
  valor_viaje: "Valor Viaje",
  ganancia_viaje: "Ganancia Viaje",
  numero_de_factura: "Número de Factura",
};
