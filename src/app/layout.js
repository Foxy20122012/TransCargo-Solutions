// Importa tus estilos y otros módulos necesarios
'use client'
import '../styles/globals.css';
import dynamic from "next/dynamic";
import presets from "../utils/globalPresets";
import LoadingProvider from '../plugins/LoadingContext'
import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import AllContexts from "../context/AllContext";
import { ToastContainer } from 'react-toastify';
import I18nProvider from '../plugins/i18nContext'
import BtnAppBar from '../components/appBar'
import 'vComponents/styles/generated/output.css'
import 'vComponents/styles/generated/bgColors.min.css'
// import 'vComponents/styles/generated/textColorBase.min.css'
// import 'vComponents/styles/globals.css'
// import 'vComponents/styles/generated/grid.min.css'
// import 'vComponents/styles/generated/border.min.css'
import Footer from "../components/Footer";
// import 'vComponents/styles/globals.css'

// const Footer = dynamic(() => import('vComponents/dist/Footer'), { ssr: false });
const Navbar = dynamic(() => import('vComponents/dist/Navbar'), { ssr: false });
const ResponsiveContainer = dynamic(() => import('../layout/ResponsiveContainer'), { ssr: false });


export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const userObj = {
    compania: 'Mi Empresa',
    nombre_usuario: 'John Doe',
    email: 'john.doe@example.com',
  };


  return (
    <html lang="en">
      <body>
        <div>
          <div className="flex h-screen overflow-hidden">
            <div className=' flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full'>
              <main>
                <div className={userObj && userObj.nombre_usuario ? 'px-4 sm:px-6 lg:px-8 py-2 w-full max-w-9xl mx-auto bg-gray-100 mb-10' : ''}>
                <AllContexts>
                <I18nProvider locale={'es'}>
                <LoadingProvider>
                  <ToastContainer/>
                  {/* <ResponsiveContainer> */}
                  {/* <BtnAppBar/> */}
                  {children}
                  {/* </ResponsiveContainer> */}
                  </LoadingProvider>
                </I18nProvider>
                </AllContexts>
                </div>
              </main>
            </div>
          </div>
          <Footer 
          version="1.0.0"
          />
        </div>
      </body>
    </html>
  );
}
