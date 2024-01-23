'use client'
// Importa las bibliotecas y componentes necesarios
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AiOutlinePicRight } from 'react-icons/ai';
import Sidebar from './Sidebar'; // Ajusta la ruta de importación según la estructura de tu proyecto
import dynamic from 'next/dynamic';

// Importa el componente UserMenu dinámicamente
const UserMenu = dynamic(() => import("vComponents/dist/UserMenu"), { ssr: false });

// Define y exporta el componente MainLayout
const MainLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  // Función para alternar la visibilidad de la barra lateral
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Función para manejar el clic en el botón de perfil del usuario
  const handleProfileClick = () => {
    // Aquí puedes implementar la lógica para redirigir al usuario a su perfil o hacer cualquier otra acción necesaria
    console.log('Clicked on Profile');
  };

  // Función para manejar el clic en el botón de cerrar sesión
  const handleLogoutClick = () => {
    // Redirige al usuario a la ruta de cierre de sesión
    window.location.href = '/api/auth/signout';
  };
  

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      {showSidebar && <Sidebar />}

      {/* Contenido principal */}
      <Box sx={{ flexGrow: 1, ml: showSidebar ? 30 : 0 }}>
        {/* AppBar */}
        <AppBar sx={{ backgroundColor: '#10B981', color: 'black', position: 'fixed', zIndex: 10, width: '100%' }}>
          <Toolbar>
            <Button color="inherit" onClick={handleToggleSidebar}>
              <AiOutlinePicRight className="text-2xl" />
            </Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ERP
            </Typography>
            {/* Integra el componente UserMenu y pasa las props necesarias */}
            <Button color="inherit">
            
              <UserMenu
              // @ts-ignore
                userObj={{ 
                  nombre_usuario: 'Transportes Perdomo', 
                  compania: 'Eslogan', 
                  email: 'transportesPerdono@transportesPerdomo.com' 
                }}
                onClickProfile={handleProfileClick}
                onClickLogout={handleLogoutClick}
                buttonStyles="bg-opacity-20 px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default MainLayout;
