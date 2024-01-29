// Importaciones
import React from "react";
import BtnAppBar from "../../components/appBar";
import Colors from "../../app/themeApp/page";
import ModuleCard from "../../components/ModuleCard";  // Componente personalizado para representar visualmente cada módulo
import { FaBriefcase, FaTasks } from "react-icons/fa";  // Iconos de FontAwesome

export default function Documentacion() {
  return (
    <div>
      <BtnAppBar />
      <div className="mt-10">
        <main className="flex flex-col items-center justify-between bg-gray-100 p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32 rounded-md shadow-lg">

          {/* Título principal */}
          <h1 className="mb-5 text-center text-4xl font-bold text-blue-600 md:text-5xl">
            ¡Bienvenido al proyecto Trans Solution ERP!
          </h1>

          {/* Descripción de la empresa */}
          <p className="mb-8 text-lg text-center text-gray-700 md:text-xl">
            Trans Solution es una empresa de logística de transporte dedicada a ofrecer soluciones eficientes y seguras.
          </p>

          {/* Módulos */}
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Módulo 1 */}
            <ModuleCard
              name="Gestión de Inventarios"
              description="Mantén un control eficiente de los inventarios."
              icon={<FaBriefcase size={40} className="text-blue-500 mb-4 mx-auto" />}
              bgColor="bg-blue-100"
            />

            {/* Módulo 2 */}
            <ModuleCard
              name="Gestión de Ventas"
              description="Gestiona y registra las ventas de la empresa."
              icon={<FaBriefcase size={40} className="text-green-500 mb-4 mx-auto" />}
              bgColor="bg-green-100"
            />

            {/* Módulo 3 */}
            <ModuleCard
              name="Gestión de Clientes"
              description="Administra la información y relaciones con los clientes."
              icon={<FaBriefcase size={40} className="text-yellow-500 mb-4 mx-auto" />}
              bgColor="bg-yellow-100"
            />

            {/* Módulo 4 */}
            <ModuleCard
              name="Gestión Financiera"
              description="Opera las finanzas y asegura la salud financiera de la empresa."
              icon={<FaBriefcase size={40} className="text-red-500 mb-4 mx-auto" />}
              bgColor="bg-red-100"
            />

            {/* Módulo 5 */}
            <ModuleCard
              name="Login y Seguridad"
              description="Maneja la autenticación y seguridad del sistema."
              icon={<FaBriefcase size={40} className="text-purple-500 mb-4 mx-auto" />}
              bgColor="bg-purple-100"
            />

            {/* Módulo de Pendientes */}
            <ModuleCard
              name="Módulo de Pendientes"
              description="Gestiona y registra las tareas pendientes."
              icon={<FaTasks size={40} className="text-indigo-500 mb-4 mx-auto" />}
              bgColor="bg-indigo-100"
            />
          </div>

          {/* Paleta de Colores */}
          <div className="mb-10">
            <p className="text-center text-sm font-bold md:text-base">
              Mantenemos un trabajo estético guiándonos por una paleta de colores.
            </p>
            <Colors />
          </div>
        </main>
      </div>
    </div>
  );
}
