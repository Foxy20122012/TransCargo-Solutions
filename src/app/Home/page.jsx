'use client'
import React from "react";
import BtnAppBar from "../../components/appBar";
import { FaClipboardList, FaUserFriends, FaCalendarAlt, FaCar, FaTruck } from "react-icons/fa"; // React Icons
import { Card, CardContent, Typography, Grid } from "@mui/material"; // Material-UI components
import { usePedidos } from "../../context/PedidosContext";
import { useClientes } from "../../context/ClientesContext";
import { useEmpleados } from "../../context/EmpleadosContext";
import axios from "axios";

const Dashboard = () => {
  const { pedidos } = usePedidos();
  const { clientes } = useClientes();
  const { empleados } = useEmpleados();

  const [totalVehicles, setTotalVehicles] = React.useState(0);

  React.useEffect(() => {
    // Llamada a la API para obtener el total de vehículos
    axios.get("https://apisuite.azurewebsites.net/api/vehicles")
      .then(response => setTotalVehicles(response.data.length))
      .catch(error => console.error("Error fetching vehicles:", error));
  }, []);

  return (
    <div>
      <BtnAppBar />

      <div className="mt-10 p-4">
        <Typography variant="h4" className="mb-4">
          Resumen del Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Pedidos */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="bg-blue-100">
              <CardContent className="text-center">
                <FaClipboardList size={40} className="mb-2 text-blue-500" />
                <Typography variant="h5" className="font-bold">
                  Pedidos
                </Typography>
                <Typography variant="body2">Total: {pedidos.length}</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Clientes */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="bg-yellow-100">
              <CardContent className="text-center">
                <FaUserFriends size={40} className="mb-2 text-yellow-500" />
                <Typography variant="h5" className="font-bold">
                  Clientes
                </Typography>
                <Typography variant="body2">Total: {clientes.length}</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Empleados */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="bg-green-100">
              <CardContent className="text-center">
                <FaUserFriends size={40} className="mb-2 text-green-500" />
                <Typography variant="h5" className="font-bold">
                  Empleados
                </Typography>
                <Typography variant="body2">Total: {empleados.length}</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Vehículos */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="bg-red-100">
              <CardContent className="text-center">
                <FaCar size={40} className="mb-2 text-red-500" />
                <Typography variant="h5" className="font-bold">
                  Vehículos
                </Typography>
                <Typography variant="body2">Total: {totalVehicles}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
