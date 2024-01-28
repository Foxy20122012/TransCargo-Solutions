'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VehiclesForms from '../../components/VehiclesForms';
import VehiclesCards from '../../components/VehiclesCards';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Obtener datos de la API al cargar la página
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('https://apisuite.azurewebsites.net/api/vehicles');
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const handleCreateVehicle = async (newVehicle) => {
    try {
      const formData = new FormData();
      Object.entries(newVehicle).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await axios.post('https://apisuite.azurewebsites.net/api/vehicles', formData);

      // Volver a cargar la lista de vehículos
      fetchVehicles();
    } catch (error) {
      console.error('Error creating vehicle:', error);
    }
  };

  return (
    <div>
      <h1>Vehicles Page</h1>
      <div className="grid grid-cols-3 gap-4">
        {vehicles.map((vehicle) => (
          <VehiclesCards key={vehicle.ID} vehicle={vehicle} />
        ))}
      </div>
      <VehiclesForms onSubmit={handleCreateVehicle} />
    </div>
  );
};

export default VehiclesPage;
