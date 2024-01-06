import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "../../../../libs/prisma";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const materiasPrimas = await prisma.materiasPrimas.findFirst({
      
      where: {
        //@ts-ignore
        id: Number(params.id),
      },
      // @ts-ignore
      include: {
        Proveedores: true,
        SalidasMateriasPrimas: true,
      },
    });

    if (!materiasPrimas)
      return NextResponse.json(
        { message: "Materia prima no encontrada" },
        { status: 404 }
      );

    return NextResponse.json(materiasPrimas);
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

export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedMateriaPrima = await prisma.materiasPrimas.delete({

      where: {
        // @ts-ignore
        id: Number(params.id),
      },
    });

    if (!deletedMateriaPrima)
      return NextResponse.json(
        { message: "Materia prima no encontrada" },
        { status: 404 }
      );

    return NextResponse.json(deletedMateriaPrima);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Materia prima no encontrada",
          },
          {
            status: 404,
          }
        );
      }

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

export async function PUT(request: Request, { params }: Params) {
  try {
    const {
      nombre,
      cantidad_inicial,
      proveedor_id,
      fecha_recepcion,
      codigo_unidad,
      precio_unitario,
      fecha_vencimiento,
      ubicacion_almacen,
      descripcion,
      cuenta,
      folio_interno, 
      destino,        
      odometro_llegada,
      descarga_pagada,   
      valor_viaje,       
      ganancia_viaje,    
      numero_de_factura
    } = await request.json();

    const updatedMateriaPrima = await prisma.materiasPrimas.update({
      where: {
        // @ts-ignore
        id: Number(params.id),
      },
      data: {
        nombre,
        cantidad_inicial,
        proveedor_id,
        fecha_recepcion,
        codigo_unidad,
        precio_unitario,
        fecha_vencimiento,
        ubicacion_almacen,
        descripcion,
        cuenta,
        folio_interno, 
        destino,        
        odometro_llegada,
        descarga_pagada,   
        valor_viaje,       
        ganancia_viaje,    
        numero_de_factura
      },
    });

    return NextResponse.json(updatedMateriaPrima);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Materia prima no encontrada",
          },
          {
            status: 404,
          }
        );
      }

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