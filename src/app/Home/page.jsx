import React from "react";
import BtnAppBar from "../../components/appBar";

const Dashboard = () => {
  return (
    <div className="mt-10">
      <BtnAppBar />
      <div className="bg-gray-50 min-h-screen p-8 font-sans">
        {/* Barra de Navegación */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 mb-16 rounded-lg shadow-2xl">
          <h1 className="text-5xl font-extrabold">Dashboard de Transporte</h1>
          <p className="text-xl mt-4 opacity-90">
            Control avanzado para operaciones de transporte
          </p>
        </div>

        {/* Sección de Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="bg-white p-12 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <h2 className="text-4xl font-semibold mb-8">Resumen General</h2>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <p className="text-xl text-gray-700">Vehículos disponibles</p>
                <p className="text-6xl font-bold text-purple-600">50</p>
              </div>
              <div>
                <p className="text-xl text-gray-700">Rutas programadas</p>
                <p className="text-6xl font-bold text-purple-600">30</p>
              </div>
            </div>
          </div>

          {/* Gestión de Vehículos */}
          <div className="bg-white p-12 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <h2 className="text-4xl font-semibold mb-8">
              Gestión de Vehículos
            </h2>
            <ul className="list-disc list-inside">
              <li className="text-purple-600 text-2xl mb-6">
                Vehículo 1: Activo
              </li>
              <li className="text-purple-600 text-2xl mb-6">
                Vehículo 2: Inactivo
              </li>
            </ul>
          </div>

          {/* Seguimiento de Rutas */}
          <div className="bg-white p-12 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <h2 className="text-4xl font-semibold mb-8">
              Seguimiento de Rutas
            </h2>
            <div className="mb-8">
              <p className="text-xl text-gray-700">Ruta 1</p>
              <p className="text-purple-600 text-2xl">En curso</p>
            </div>
            <div>
              <p className="text-xl text-gray-700">Ruta 2</p>
              <p className="text-green-600 text-2xl">Finalizada</p>
            </div>
          </div>
        </div>

        {/* Sección de Conductores */}
        <div className="bg-white p-12 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 mb-16">
          <h2 className="text-4xl font-semibold mb-8">
            Gestión de Conductores
          </h2>
          <ul className="list-disc list-inside">
            <li className="text-purple-600 text-2xl mb-6">
              Conductor 1: Disponible
            </li>
            <li className="text-purple-600 text-2xl mb-6">
              Conductor 2: Ocupado
            </li>
          </ul>
        </div>

        {/* Sección de Informes */}
        <div className="bg-white p-12 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 mb-16">
          <h2 className="text-4xl font-semibold mb-8">
            Informes y Estadísticas
          </h2>
          <p className="text-xl text-gray-700">
            Gráficos avanzados y análisis de rendimiento
          </p>
        </div>

        {/* Sección de Configuración */}
        <div className="bg-white p-12 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 mb-16">
          <h2 className="text-4xl font-semibold mb-8">Configuración</h2>
          <p className="text-xl text-gray-700">
            Personaliza y optimiza tus ajustes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
