import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const VehicleForm = ({ onSubmit }) => {
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

  return (
    <div>
      <h2>Create New Vehicle</h2>
      <form>
        <TextField
          label="Marca"
          name="Marca"
          value={newVehicle.Marca}
          onChange={handleInputChange}
          fullWidth
        />
         <TextField
          label="Descripcion"
          name="Descripcion"
          value={newVehicle.Descripcion}
          onChange={handleInputChange}
          fullWidth
        />
         <TextField
          label="Modelo"
          name="Modelo"
          value={newVehicle.Modelo}
          onChange={handleInputChange}
          fullWidth
        />
     <TextField
          label="CapacidadCarga"
          name="CapacidadCarga"
          value={newVehicle.CapacidadCarga}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="TipoCombustible"
          name="TipoCombustible"
          value={newVehicle.TipoCombustible}
          onChange={handleInputChange}
          fullWidth
        />
       <TextField
          label="EstadoVehiculo"
          name="EstadoVehiculo"
          value={newVehicle.EstadoVehiculo}
          onChange={handleInputChange}
          fullWidth
        />
               <TextField
          label="AnioFabricacion"
          name="AnioFabricacion"
          value={newVehicle.AnioFabricacion}
          onChange={handleInputChange}
          fullWidth
          type='number'
        />
        <TextField
          label="Placa"
          name="Placa"
          value={newVehicle.Placa}
          onChange={handleInputChange}
          fullWidth
        />
        {/* Resto de los campos de entrada aquí */}
        <input type="file" name="imagen" onChange={handleImageChange} />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Create Vehicle
        </Button>
      </form>
    </div>
  );
};

export default VehicleForm;
