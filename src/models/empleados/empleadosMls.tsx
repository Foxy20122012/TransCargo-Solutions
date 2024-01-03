import { Empleados as EmpleadosPrisma } from "@prisma/client";

export type Empleados = EmpleadosPrisma; // Exporta el tipo Empleados

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

export const transformEmpleadosToRows = (empleados: Empleados[] | undefined): Row[] => {
  if (!Array.isArray(empleados)) {
    // Manejar el caso en el que empleados no es un array
    return [];
  }
  // @ts-ignore
  return empleados.map((empleado) => ({
    id: empleado.id,
    nombre: empleado.nombre || "",
    apellido: empleado.apellido || "",
    direccion: empleado.direccion || "",
    telefono: empleado.telefono || "",
    correo_electronico: empleado.correo_electronico || "",
    puesto: empleado.puesto || "",
    salario: empleado.salario || "",
  }));
};

export type EmpleadosModel = keyof Row;

export const empleadosColumns: Record<EmpleadosModel, string> = {
  id: "ID",
  nombre: "Nombre",
  apellido: "Apellido",
  direccion: "Dirección",
  telefono: "Teléfono",
  correo_electronico: "Correo Electrónico",
  puesto: "Puesto",
  salario: "Salario",
};