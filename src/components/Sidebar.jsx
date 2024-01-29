'use client'
import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Hidden from '@mui/material/Hidden';
import { LuFiles, LuCar } from 'react-icons/lu'
import { HiOutlineUserGroup, HiOutlineClipboardCheck  } from 'react-icons/hi'
import { BsBoxSeam, BsFileEarmarkSpreadsheet } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { GiPayMoney,GiAbstract070 } from 'react-icons/gi'
import { FiBox, FiArrowLeft, FiPocket  } from 'react-icons/fi'
import { PiNotePencilFill, PiTruckDuotone  } from 'react-icons/pi'
import { RiGasStationLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";

const Sidebar = () => {
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [ventasOpen, setVentasOpen] = useState(false);
  const [finanzasOpen, setFinanzasOpen] = useState(false);
  const [gasolinaOpen, setGasolinaOpen] = useState(false);

const handleGasolinaClick = () => {
  setGasolinaOpen(!gasolinaOpen);
};


  const handleFinanzasClick = () => {
    setFinanzasOpen(!finanzasOpen);
  };

  const handleInventoryClick = () => {
    setInventoryOpen(!inventoryOpen);
  };

  const handleVentasClick = () => {
    setVentasOpen(!ventasOpen);
  };

  const sidebarItems = [
    {
      text: 'dashboard',
      link: '/Home',
      icon: <FiPocket className="m-3 text-xl font-bold" />,
    },
    {
      text: 'Reportes de Viajes',
      link: '/viajes',
      icon: <LuFiles className="m-3 text-xl font-bold" />,
    },
    {
      text: 'Pendientes',
      link: '/nota',
      icon: <PiNotePencilFill className="m-3 text-xl font-bold" />,
    },
    {
      text: 'Clientes',
      link: '/clientes',
      icon: <HiOutlineUserGroup className="m-3 text-xl font-bold" />,
    },
    {
      text: 'Planilla',
      link: '/planilla',
      icon: <BsFileEarmarkSpreadsheet className="m-3 text-xl font-bold" />,
    },  
    {
      text: 'Pedidos',
      link: '/Pedidos',
      icon: <HiOutlineClipboardCheck className="m-3 text-xl font-bold" />,
    },
    {
      text: 'Documentacion',
      link: '/documentacion',
      icon: <HiOutlineClipboardCheck className="m-3 text-xl font-bold" />,
    },
  
    {
      text: 'Vehiculos',
      link: '/vehiculos',
      icon: <PiTruckDuotone className="m-3 text-xl font-bold" />,
    },
    {
      text: 'Cerrar Sesión',
      link: '/api/auth/signout',
      icon: <FiArrowLeft className="m-3 text-xl font-bold" />,
    },

  ];

  return (
    <div>
      {/* Sidebar para pantallas más grandes */}
      <Hidden mdDown>
        <div className="fixed left-0 top-0 z-10 flex h-screen w-60 flex-col items-center bg-white py-6 shadow-md">
          <Typography variant="h6">Sidebar Title</Typography>
          <List sx={{ width: '100%' }}>
            {sidebarItems.map((item) => (
              <div key={item.text}>
                <ListItem disablePadding onClick={() => item.children && handleInventoryClick()}>
                  <ListItemButton component="a" href={item.link}>
                    {item.icon}
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
                {item.children && (
                  <Collapse in={inventoryOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((child) => (
                        <ListItem key={child.text} disablePadding>
                          <ListItemButton component="a" href={child.link}>
                            {child.icon}
                            <ListItemText primary={child.text} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </List>
        </div>
      </Hidden>

      {/* Menú colapsable para pantallas más pequeñas */}
      <Hidden mdUp>
        <div className="fixed left-0 top-0 z-10 bg-white py-4 shadow-md">
          <Typography variant="h6" align="center">
            Menu
          </Typography>
          <List>
            {sidebarItems.map((item) => (
              <div key={item.text}>
                <ListItem disablePadding onClick={() => item.children && handleInventoryClick()}>
                  <ListItemButton component="a" href={item.link}>
                    {item.icon}
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
                {item.children && (
                  <Collapse in={inventoryOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((child) => (
                        <ListItem key={child.text} disablePadding>
                          <ListItemButton component="a" href={child.link}>
                            {child.icon}
                            <ListItemText primary={child.text} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </List>
        </div>
      </Hidden>
    </div>
  );
};

export default Sidebar;
