import React, { useState } from "react";
import { Card, CardContent, Typography, CardMedia, IconButton } from "@mui/material";
import { MdDelete, MdEdit} from "react-icons/md";
import Modalsvehicles from "../components/Modalvehicle";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VehicleCard = ({ vehicle, onDelete, onEdit }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // Nuevo estado

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

  const handleDelete = async () => {
    try {
      setIsDeleting(true); // Activa el estado de eliminación
      await axios.delete(`https://apisuite.azurewebsites.net/api/vehicles/${vehicle.ID}`);
      onDelete(vehicle.ID);
      setDeleteModalOpen(false);
      showDeleteToast();
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    } finally {
      setIsDeleting(false); // Desactiva el estado de eliminación, independientemente de si tuvo éxito o no
    }
  };

  const showDeleteToast = () => {
    toast.success("Registro eliminado correctamente", {
      position: "top-center", // Cambia la posición a "top-center"
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      style: {
        top: "50%", // Centra verticalmente
        left: "50%", // Centra horizontalmente
        transform: "translate(-50%, -50%)", // Ajusta el centro correctamente
      },
    });
  };

  return (
    <div>
      <Card className="max-w-md mx-auto my-4 bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
        <div className="relative h-40 md:h-52 lg:h-64 overflow-hidden">
          <CardMedia
            component="img"
            alt="Vehicle Image"
            height="100%"
            image={getImageSrc()}
            className="object-contain w-full h-full"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <Typography
              variant="h6"
              className="text-xl font-semibold text-gray-800"
            >
              {`${vehicle.Marca} - ${vehicle.Modelo} - ${vehicle.Placa}`}
            </Typography>
            <div className="flex gap-2">
              <IconButton
                onClick={() => setDeleteModalOpen(true)}
                color="error"
                disabled={isDeleting} // Desactiva el botón durante la eliminación
              >
                <MdDelete />
              </IconButton>
              {/* <IconButton onClick={() => onEdit(vehicle)}>
            <MdEdit />
          </IconButton> */}
            </div>
          </div>
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

          <Modalsvehicles
            isOpen={isDeleteModalOpen}
            title="Confirmar Eliminación"
            message={`¿Estás seguro de que deseas eliminar el vehículo ${vehicle.Marca} - ${vehicle.Modelo} - ${vehicle.Placa}?`}
            onConfirm={handleDelete}
            onCancel={() => setDeleteModalOpen(false)}
            showConfirmButton={true}
          />
        </CardContent>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default VehicleCard;
