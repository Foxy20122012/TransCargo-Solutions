'use client'
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useEffect } from 'react';

const VehicleForm = ({ onSubmit, selectedVehicle }) => {
  const [newVehicle, setNewVehicle] = useState({
    Marca: '',
    Descripcion: '',
    Modelo: '',
    Placa: '',
    AnioFabricacion: 0,
    CapacidadCarga: '',
    TipoCombustible: '',
    EstadoVehiculo: '',
    KilometrajeActual: 0,
  });
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    setNewVehicle({
      ...newVehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    onSubmit({
      ...newVehicle,
      imagen: image,
    });

    // Limpiar formulario después de enviar
    setNewVehicle({
      Marca: '',
      Descripcion: '',
      Modelo: '',
      Placa: '',
      AnioFabricacion: 0,
      CapacidadCarga: '',
      TipoCombustible: '',
      EstadoVehiculo: '',
      KilometrajeActual: 0,
    });
    setImage(null);
  };

  useEffect(() => {
    // Si hay un vehículo seleccionado, inicializa el formulario con sus datos
    if (selectedVehicle) {
      setNewVehicle(selectedVehicle);
    }
  }, [selectedVehicle]);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create New Vehicle</h2>
      <form>
        <TextField
          label="Marca"
          name="Marca"
          value={newVehicle.Marca}
          onChange={handleInputChange}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Descripcion"
          name="Descripcion"
          value={newVehicle.Descripcion}
          onChange={handleInputChange}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Modelo"
          name="Modelo"
          value={newVehicle.Modelo}
          onChange={handleInputChange}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="CapacidadCarga"
          name="CapacidadCarga"
          value={newVehicle.CapacidadCarga}
          onChange={handleInputChange}
          fullWidth
          className="mb-4"
          type='number'
        />
        <TextField
          label="TipoCombustible"
          name="TipoCombustible"
          value={newVehicle.TipoCombustible}
          onChange={handleInputChange}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="EstadoVehiculo"
          name="EstadoVehiculo"
          value={newVehicle.EstadoVehiculo}
          onChange={handleInputChange}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="AnioFabricacion"
          name="AnioFabricacion"
          value={newVehicle.AnioFabricacion}
          onChange={handleInputChange}
          fullWidth
          type="number"
          className="mb-4"
        />
        <TextField
          label="Placa"
          name="Placa"
          value={newVehicle.Placa}
          onChange={handleInputChange}
          fullWidth
          className="mb-4"
        />
        <input type="file" name="imagen" onChange={handleImageChange} className="mb-4" />

        <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
          Create Vehicle
        </Button>
      </form>
    </div>
  );
};

export default VehicleForm;
