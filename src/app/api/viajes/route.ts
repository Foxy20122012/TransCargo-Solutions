import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

// Funciones para formatear fecha y hora
function formatTimeTo24Hours(time: string): string {
  // Aquí puedes implementar cualquier lógica de formateo de horas si es necesario
  return time;
}

// Operación GET para recuperar todos los registros de reporte_viaje
export async function GET() {
    try {
      // Obtener todos los registros de reporte_viaje
      const reportes = await prisma.reporte_viaje.findMany();
  
      // Convertir la fecha de formato YYYY-MM-DD a DD-MM-YY para cada reporte
      const reportesFormateados = reportes.map((reporte) => {
        // Formatear la fecha de YYYY-MM-DD a DD-MM-YY
        const fecha = reporte.fecha.toISOString().split('T')[0].split('-').reverse().slice(0, 3).join('-').substring(2);
        
        return {
          ...reporte,
          fecha, // Asignar la fecha formateada al reporte
        };
      });
  
      return NextResponse.json(reportesFormateados);
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json(
          {
            message: error.message,
          },
          {
            status: 500,
          }
        );
      }
    }
  }
// Operación POST para crear un nuevo registro de reporte_viaje
export async function POST(request: Request) {
  try {
    const {
      piloto_asignado,
      unidad_asignada,
      hora_salida,
      hora_llegada,
      punto_salida,
      odometro_salida,
      fecha,
      folio_interno,
      destino,
      odometro_llegada,
      kilometros_ida,
      kilometros_llegada,
      descarga_pagada,
      valor_viaje,
      factura,
    } = await request.json();

    const formattedFecha = `STR_TO_DATE('${fecha}', '%d/%m/%y')`;

    const newReporteViaje = await prisma.$executeRaw`INSERT INTO reporte_viaje
      (piloto_asignado, unidad_asignada, hora_salida, hora_llegada, punto_salida, odometro_salida,
       fecha, folio_interno, destino, odometro_llegada, kilometros_ida, kilometros_llegada,
       descarga_pagada, valor_viaje, factura)
      VALUES (${piloto_asignado}, ${unidad_asignada}, ${formatTimeTo24Hours(hora_salida)},
              ${formatTimeTo24Hours(hora_llegada)}, ${punto_salida}, ${odometro_salida},
              ${formattedFecha}, ${folio_interno}, ${destino}, ${odometro_llegada},
              ${kilometros_ida}, ${kilometros_llegada}, ${descarga_pagada}, ${valor_viaje}, ${factura})`;

    return NextResponse.json(newReporteViaje);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
