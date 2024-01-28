import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const VehicleCard = ({ vehicle }) => {
  const getImageSrc = () => {
    if (
      vehicle.Imagen &&
      vehicle.Imagen.type === "Buffer" &&
      vehicle.Imagen.data.length > 0
    ) {
      const bufferArray = new Uint8Array(vehicle.Imagen.data);
      const imageBase64 = Buffer.from(bufferArray).toString("base64");
      return `data:image/jpeg;base64,${imageBase64}`;
    } else {
      return ""; // O proporciona una imagen predeterminada
    }
  };

  return (
    <Card className="max-w-md mx-auto my-4 bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <CardMedia
        component="img"
        alt="Vehicle Image"
        height="140"
        image={getImageSrc()}
        className="object-cover w-full h-40"
      />
      <CardContent className="p-4">
        <Typography variant="h6" className="text-xl font-semibold mb-2 text-gray-800">
          {`${vehicle.Marca} - ${vehicle.Modelo} - ${vehicle.Placa}`}
        </Typography>
        <Typography variant="body2" className="text-gray-600 mb-2">
          {`${vehicle.Descripcion} - ${vehicle.EstadoVehiculo}`}
        </Typography>
        <div className="flex justify-between items-center">
          <Typography variant="body2" className="text-gray-600">
            {`Año: ${vehicle.AnioFabricacion}`}
          </Typography>
          <Typography variant="body2" className="text-indigo-500 font-semibold">
            {`${vehicle.CapacidadCarga} - ${vehicle.TipoCombustible}`}
          </Typography>
        </div>
        {/* Puedes agregar más detalles según sea necesario */}
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
