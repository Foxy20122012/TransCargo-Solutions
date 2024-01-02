// models/clientes.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Clientes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    correo_electronico: {
      type: DataTypes.STRING,
    },
    historial_compras: {
      type: DataTypes.TEXT,
    },
  });
};
