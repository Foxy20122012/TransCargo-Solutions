"use client";
import BtnAppBar from "../../components/appBar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import VehiclesForms from "../../components/VehiclesForms";
import VehiclesCards from "../../components/VehiclesCards";

const VDialog = dynamic(
  () => {
    return import("vComponents/dist/VDialog");
  },
  { ssr: false }
);

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    // Obtener datos de la API al cargar la página
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get(
        "https://apisuite.azurewebsites.net/api/vehicles"
      );
      setVehicles(response.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const handleEditVehicle = (vehicle) => {
    // Abrir el formulario de edición con los datos del vehículo seleccionado
    setFormVisible(true);
    setSelectedVehicle(vehicle);
  };

  const handleCreateVehicle = async (newVehicle) => {
    try {
      const formData = new FormData();
      Object.entries(newVehicle).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await axios.post(
        "https://apisuite.azurewebsites.net/api/vehicles",
        formData
      );

      // Volver a cargar la lista de vehículos
      fetchVehicles();

      // Ocultar el formulario después de enviar
      setFormVisible(false);
    } catch (error) {
      console.error("Error creating vehicle:", error);
    }
  };

  const handleCancel = () => {
    // Ocultar el formulario al presionar Cancelar
    setFormVisible(false);
  };

  return (
    <div className="mt-16">
      <BtnAppBar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Vehicles Page</h1>

        <div className="flex justify-end mb-4">
          {/* Botón para mostrar/ocultar el formulario */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setFormVisible(!isFormVisible)}
          >
            {isFormVisible ? "Hide Form" : "Show Form"}
          </button>
        </div>

        <VDialog
          isOpen={isFormVisible}
          size="sm"
          className="bg-black bg-opacity-25"
        >
          {/* Mostrar el formulario solo si isFormVisible es true */}
          {isFormVisible && <VehiclesForms onSubmit={handleCreateVehicle} />}
          <button
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 flex items-end"
          >
            Cancelar
          </button>
        </VDialog>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map((vehicle) => (
            <VehiclesCards
              key={vehicle.ID}
              vehicle={vehicle}
              onEdit={handleEditVehicle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehiclesPage;
