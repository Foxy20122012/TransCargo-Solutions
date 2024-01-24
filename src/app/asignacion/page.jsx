'use client'

// Importa las bibliotecas y componentes necesarios
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import presets from "../../utils/globalPresets"
import mantenimientoModel from "../../models/mantenimientos/mantenimientoModel"
import useHasMounted from '../../hooks/useHasMounted'
import Loading from "../../components/Loading"
import BtnAppBar from '../../components/appBar';
import DynamicForm from "../../components/DynamicForm";
import mantenimientoProps from "../../models/mantenimientos/mantenimientosProps";
import Modals from "../../components/Modals";
import SuccessModal from "../../components/SuccessModal";

// Importa el componente DataTable de forma dinámica
const DataTable = dynamic(() => import("vComponents/dist/DataTable"), { ssr: false });
const VDialog = dynamic(() => { return import("vComponents/dist/VDialog") }, { ssr: false })

// Define el componente principal
const MantenimientoPage = () => {

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [headers, setHeaders] = useState([]); // Define tus cabeceras aquí
  const [items, setItems] = useState([]); // Define tus elementos aquí
  const hasMounted = useHasMounted()

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar la solicitud HTTP para obtener los datos de la API
        const response = await fetch("https://apisuite.azurewebsites.net/api/mantenimientosVehiculos");
        
        // Verificar si la solicitud fue exitosa (código 200)
        if (response.ok) {
          // Convertir la respuesta a formato JSON
          const data = await response.json();
          
          // Asignar los datos a la variable items
          setItems(data);
        } else {
          console.error("Error al obtener los datos de la API:", response.status);
        }
      } catch (error) {
        console.error("Error al realizar la solicitud HTTP:", error);
      }
    };

    // Llamar a la función fetchData para obtener los datos al montar el componente
    fetchData();
  }, []); // Dependencias vacías para que se ejecute una vez al montar el componente


  // Define los estados para las cabeceras y los elementos



  const openDeleteModal = () => {
  
  };

  const closeDeleteModal = () => {
 
  };

  const handleEditCliente = () => {

  };

  const handleDelete = () => {

  };


  const handleNewClick = () => {
    setIsFormVisible(true);

  };

  const handleCreateOrUpdate = async (formData) => {
    try {
    //   if () {

    //   } else {

    //   }
  
    } catch (error) {
      console.error("Error al crear o actualizar el dato:", error);
    }
  };

  const handleUpdateClick = async (formData) => {
    try {
    //   if () {
  
    //   }

    } catch (error) {
      console.error("Error al actualizar el dato:", error);
    }
  };
  

  
  // Lógica para obtener y configurar las cabeceras y elementos, por ejemplo, useEffect o llamadas a API...
  useEffect(() => {
    setHeaders(mantenimientoModel);
    // setItems(fetchedItems);
  }, []); // Dependencias vacías para que se ejecute una vez al montar el componente

  const handleConfirmDelete = async () => {
    try {

    } catch (error) {

    }
  };
  
  if (!hasMounted) {
    return <Loading/>; //<Loadig />
  }
//
  return (
    <>
    <BtnAppBar/>
    <div className="mt-20 ml-12">
      <div className="my-2 uppercase font-bold text-base">
      Clientes
      </div>
      {/* Pasa las cabeceras y elementos al componente DataTable */}
      <DataTable headers={headers} items={items}//  aca items debes cargar los datos a la tabla
      presets={presets} 
       onNewItem={handleNewClick}
       onEditItem={handleEditCliente} 
       onDeleteItem={handleDelete}
       
      />
         {isFormVisible && isFormVisible === true && 
      <VDialog
      isOpen={isFormVisible}
      size='sm'
      className='-translate-x-1/2 bg-black bg-opacity-25'
      >
           <DynamicForm
            formProps={mantenimientoProps}
            onSubmit={handleCreateOrUpdate}
            showCreateButton=""// recibira el evento del boton crear del formulario
            showUpdateButton=""// recibira el evento del boton crear del formulario
            initialFormData=""// recibira el evento del cargar los datos al formulario cuando toque editar un dato
            // @ts-ignore
            onUpdateClick={handleUpdateClick} // Pasa la función handleUpdateClick al DynamicForm
            columns={2}
          />
            <div className="flex justify-end mt-4">
    <button
      onClick={() => setIsFormVisible(false)} // Cierra el modal o dialogo
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
    >
      Cancelar
    </button>
  </div>
      </VDialog>
      }
        <Modals
          isOpen={isDeleteModalOpen}
          title="Confirmar Eliminación"
          message={`¿Estás seguro de que deseas eliminar al cliente ?`}
          // en onConfirm debes poner la logica para confirmar la eliminacion
          onConfirm=""
          onCancel={closeDeleteModal}
          // @ts-ignore
          onUpdate={handleUpdateClick}
          showUpdateButton={false}
          showConfirmButton={true} // Configura según tus necesidades
        />
        <SuccessModal
          isOpen={isDeleteSuccess}
          onClose={() => setIsDeleteSuccess(false)}
          message="se ha eliminado correctamente."
          buttonText="Aceptar"
        />
      <div className="bg-cyan-200">
      <button onClick={() => setIsModalVisible(true)}>Mostrar Modal</button>
    </div>

      </div>
    </>
   
  );
};

export default MantenimientoPage;

