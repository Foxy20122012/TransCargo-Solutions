import { Pilotos as PilotosPrisma } from "@prisma/client";

export type Pilotos = PilotosPrisma; // Exporta el tipo Empleados

export type Row = {
  id: number;
  nombre: string | null;
  apellido: string | null;
  direccion: string | null;
  telefono: string | null;
  correo_electronico: string | null;
  puesto: string | null;
  salario: number | null;
};

export const transformPilotosToRows = (pilotos: Pilotos[] | undefined): Row[] => {
  if (!Array.isArray(pilotos)) {
    // Manejar el caso en el que empleados no es un array
    return [];
  }
  // @ts-ignore
  return pilotos.map((pilotos) => ({
    id: pilotos.id,
    nombre: pilotos.nombre || "",
    apellido: pilotos.apellido || "",
    direccion: pilotos.direccion || "",
    telefono: pilotos.telefono || "",
    correo_electronico: pilotos.correo_electronico || "",
    puesto: pilotos.puesto || "",
    salario: pilotos.salario || "",
  }));
};

export type PilotosModel = keyof Row;

export const pilotosColumns: Record<PilotosModel, string> = {
  id: "ID",
  nombre: "Nombre",
  apellido: "Apellido",
  direccion: "Dirección",
  telefono: "Teléfono",
  correo_electronico: "Correo Electrónico",
  puesto: "Puesto",
  salario: "Salario",
};