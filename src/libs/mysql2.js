import mysql from 'mysql2/promise';
import axios from 'axios';

export const pool = mysql.createPool({
  host: 'srv826.hstgr.io',
  user: 'u930882479_novaStudio',
  password: 'Merlos2012',
  port: 3306,
  database: 'u930882479_novaStudio'
});

export const query = async (sql, values) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute(sql, values);
    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  } finally {
    connection.release();
  }
};

// Función para realizar consultas usando Axios si es necesario
export const axiosQuery = async (endpoint, data) => {
  const BASE_URL = 'https://tu-base-url-api.com'; // Ajusta esta URL a tu API
  const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  try {
    const response = await axiosClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error with Axios query:', error);
    throw error;
  }
};
