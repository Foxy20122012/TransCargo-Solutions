import { Clientes as ClientesPrisma } from "@prisma/client";

export type Clientes = ClientesPrisma; // Exporta el tipo Clientes

export type Row = {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  correo_electronico: string;
  historial_compras: string;
};

export const transformClientesToRows = (clientes: Clientes[]): Row[] => {
  return clientes.map((cliente) => ({
    id: cliente.id,
    nombre: cliente.nombre || "", // Proporciona un valor predeterminado en caso de ser null
    direccion: cliente.direccion || "",
    telefono: cliente.telefono || "",
    correo_electronico: cliente.correo_electronico || "",
    historial_compras: cliente.historial_compras || "",
  }));
};

export type ClientesModel = keyof Row;

export const clientesColumns: Record<ClientesModel, string> = {
  id: "ID",
  nombre: "Nombre",
  direccion: "Dirección",
  telefono: "Teléfono",
  correo_electronico: "Correo Electrónico",
  historial_compras: "Historial de Compras",
};
