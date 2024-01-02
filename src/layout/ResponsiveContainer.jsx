// ResponsiveContainer.jsx

import { useEffect, useState, createContext } from 'react';
import dynamic from 'next/dynamic';
import presets from "../utils/globalPresets";
import Sidebar from '../components/Sidebar';

export const LayoutContext = createContext();

const Footer = dynamic(() => import('vComponents/dist/Footer'), { ssr: false });
const Navbar = dynamic(() => import('vComponents/dist/Navbar'), { ssr: false });

const ResponsiveContainer = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const userObj = {
    compania: 'Nova Studio',
    nombre_usuario: 'John Doe',
    email: 'john.doe@example.com',
  };

  const setTitle = (title) => {
    // Lógica para establecer el título (si es necesario)
  };

  const onClickLogout = () => {
    // Lógica para cerrar sesión
  };

  const onBackKeyDown = () => {
    if (window.location.pathname === '/') {
      if (navigator.app) {
        navigator.app.exitApp();
      } else if (navigator.device) {
        navigator.device.exitApp();
      } else {
        window.close();
      }
    } else {
      window.history.back();
    }
  };

  useEffect(() => {
    if (process.browser && window.cordova) {
      document.addEventListener('backbutton', onBackKeyDown, false);
    }
  }, []);

  return (
    <LayoutContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <div className="flex h-screen overflow-hidden">
        {userObj && userObj.nombre_usuario && (
          <Sidebar />
        )}

        <div className={`${sidebarOpen ? 'relative' : 'absolute'} flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full`}>
          {userObj && userObj.nombre_usuario && (
            <Navbar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              userObj={userObj}
              presets={presets}
              setTitle={setTitle}
              onClickLogout={onClickLogout}
              onSidebarToggle={handleSidebarToggle}
            />
          )}

          <main>
            <div className={userObj && userObj.nombre_usuario ? 'px-4 sm:px-6 lg:px-8 py-2 w-full max-w-9xl mx-auto bg-gray-100 mb-10' : ''}>
              {children}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </LayoutContext.Provider>
  );
};

export default ResponsiveContainer;
