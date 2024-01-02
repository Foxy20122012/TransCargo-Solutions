// sidebarItems.jsx

import React, { useState } from 'react';
import { LuFiles } from 'react-icons/lu';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { PiNotePencilFill } from 'react-icons/pi';
import { LiaMoneyBillSolid } from 'react-icons/lia';
import { BsBoxSeam, BsFileEarmarkSpreadsheet } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { GiPayMoney, GiMoneyStack } from 'react-icons/gi';
import { FiBox, FiArrowLeft } from 'react-icons/fi';

const SidebarItems = () => {
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [ventasOpen, setVentasOpen] = useState(false);
  const [finanzasOpen, setFinanzasOpen] = useState(false);

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
      text: 'Documentación',
      link: '/',
      icon: <LuFiles className="m-3 text-xl font-bold" />
    },
    {
      text: 'Pendientes',
      link: '/nota',
      icon: <PiNotePencilFill className="m-3 text-xl font-bold" />
    },
    {
      text: 'Inventario',
      icon: <BsBoxSeam className="m-3 text-xl font-bold" />,
      onClick: handleInventoryClick
    },
    {
      text: 'Clientes',
      link: '/clientes',
      icon: <HiOutlineUserGroup className="m-3 text-xl font-bold" />
    },
    {
      text: 'Ventas',
      icon: <GiMoneyStack className="m-3 text-xl font-bold" />,
      onClick: handleVentasClick
    },
    {
      text: 'Planilla',
      link: '/planilla',
      icon: <BsFileEarmarkSpreadsheet className="m-3 text-xl font-bold" />
    },
    {
      text: 'Finanzas',
      icon: <LiaMoneyBillSolid className="m-3 text-xl font-bold" />,
      onClick: handleFinanzasClick
    },
    {
      text: 'Cerrar Sesión',
      link: '/api/auth/signout',
      icon: <FiArrowLeft className="m-3 text-xl font-bold" />
    }
  ];

  return (
    <div>
      {/* ... tu contenido restante */}
    </div>
  );
};

export default SidebarItems;
