'use client'

// Importa las bibliotecas y componentes necesarios
import dynamic from "next/dynamic";
import useI18n from '../../hooks/useI18n';
import useLoading from "../../hooks/useLoading"
import React, { useEffect, useState } from "react";
import presets from "../../utils/globalPresets"
import useHasMounted from '../../hooks/useHasMounted'
import Loading from "../../components/Loading"
import BtnAppBar from '../../components/appBar';
import DynamicForm from "../../components/DynamicForm";
import Modals from "../../components/Modals";
import SuccessModal from "../../components/SuccessModal";

import fetchedHeaders from "../../models/empleados/headers"
import { useEmpleados } from "../../context/EmpleadosContext";
import { empleadosColumns } from "../../models/empleados/empleadosMls";
import { transformEmpleadosToRows } from "../../models/empleados/empleadosMls";
import clienteModel from "../../models/clientes/clienteModel";
import clientesProps from "../../models/clientesPs";



// Importa el componente DataTable de forma dinámica
const DataTable = dynamic(() => import("vComponents/dist/DataTable"), { ssr: false });
const Stepper = dynamic(() => import("vComponents/dist/Stepper"), { ssr: false });
const YesNoQuestion = dynamic(() => { return import("vComponents/dist/YesNoQuestion") }, { ssr: false })
const Modal = dynamic(() => { return import("vComponents/dist/Modal") }, { ssr: false })
const DataForm = dynamic(() => { return import("vComponents/dist/DataForm") }, { ssr: false })
const VDialog = dynamic(() => { return import("vComponents/dist/VDialog") }, { ssr: false })
// const VistaConsulta = dynamic(() => { return import("vComponents/dist/VistaConsulta") }, { ssr: false })

// const columns = (Object.keys(clientesColumns) as (keyof Clientes)[]).map(
//   (key) => ({ key, label: clientesColumns[key] })
// );

const columns = Object.keys(empleadosColumns).map((key) => ({
  key,
  label: empleadosColumns[key]
}));


// Define el componente principal
const ClientesPage = () => {

    const {
        empleados,
        loadEmpleados,
        createEmpleado,
        deleteEmpleado,
        selectedEmpleado,
        setSelectedEmpleado,
        updateEmpleado,
      } = useEmpleados();


  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [clientToDelete, setClientToDelete] = useState(null);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [yesNoOpen, setYesNoOpen] = useState(false)
  const rowsEmpleados = transformEmpleadosToRows(empleados); // Asegúrate de tener definida la función transformClientesToRows y la variable clientes.
  const [model, setModel] = useState(clienteModel()) 
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };


  useEffect(() => {
    loadEmpleados();
  }, []);

  // Define los estados para las cabeceras y los elementos
  const [headers, setHeaders] = useState([]); // Define tus cabeceras aquí
  const [items, setItems] = useState([]); // Define tus elementos aquí
  const i18n = useI18n()
  const loading = useLoading()
  const hasMounted = useHasMounted()


  const openDeleteModal = (client) => {
    setClientToDelete(client);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setClientToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleEditCliente = (client) => {
    setSelectedCliente(client);
    setIsFormVisible(true);
  };

  const handleDelete = (cliente) => {
    openDeleteModal(cliente);
  };
  // const deleteItem = (item) => {
  //   setModel(item)
  //   setYesNoOpen(true)
  // }

  const handleNewClick = () => {
    setSelectedCliente(null);
    setIsFormVisible(true);
  };

  const handleCreateOrUpdateCliente = async (formData) => {
    try {
      if (selectedCliente) {
        // Estás editando un cliente existente
        await updateCliente(selectedCliente.id, formData);
      } else {
        // Estás creando un nuevo cliente
        await createCliente(formData);
      }
      setIsFormVisible(false);
      setSelectedCliente(null);
      loadClientes();
    } catch (error) {
      console.error("Error al crear o actualizar el cliente:", error);
    }
  };

  const handleUpdateClick = async (formData) => {
    try {
      if (selectedCliente) {
        // Estás editando un cliente existente
        await updateCliente(selectedCliente.id, formData); // Envía los datos actualizados al servidor
      }
      setIsFormVisible(false);
      setSelectedCliente(null);
      loadClientes();
    } catch (error) {
      console.error("Error al actualizar el cliente:", error);
    }
  };
  

  // Lógica para obtener y configurar las cabeceras y elementos, por ejemplo, useEffect o llamadas a API...
  useEffect(() => {

    
    
    // Actualiza los estados con los datos obtenidos
    setHeaders(fetchedHeaders);
    // setItems(fetchedItems);
  }, []); // Dependencias vacías para que se ejecute una vez al montar el componente

  
  const handleConfirmDelete = async () => {
    try {
      await deleteCliente(clientToDelete.id); // Suponiendo que el cliente tiene una propiedad 'id'
      setIsDeleteSuccess(true); // Puedes manejar esto según tus necesidades
      setIsDeleteModalOpen(false);
      loadClientes(); // Vuelve a cargar los clientes después de eliminar uno
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);
      setIsDeleteSuccess(false); // Opcional: manejar el caso de fallo en la eliminación
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
      Empleados
      </div>
      {/* Pasa las cabeceras y elementos al componente DataTable */}
      <DataTable headers={headers} items={rowsEmpleados}  presets={presets} i18n={i18n}
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
            formProps={clientesProps}
            onSubmit={handleCreateOrUpdateCliente}
            showCreateButton={!selectedCliente}
            showUpdateButton={!!selectedCliente}
            initialFormData={selectedCliente}
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
          message={`¿Estás seguro de que deseas eliminar al cliente ${clientToDelete?.nombre}?`}
          onConfirm={async () => {
            try {
              if (clientToDelete) {
                await deleteCliente(clientToDelete.id);
                closeDeleteModal();
                setIsDeleteSuccess(true);
                loadClientes();
              }
            } catch (error) {
              console.error("Error al eliminar el cliente:", error);
            }
          }}
          onCancel={closeDeleteModal}
          // @ts-ignore
          onUpdate={handleUpdateClick}
          showUpdateButton={false}
          showConfirmButton={true} // Configura según tus necesidades
        />
        <SuccessModal
          isOpen={isDeleteSuccess}
          onClose={() => setIsDeleteSuccess(false)}
          message="El cliente se ha eliminado correctamente."
          buttonText="Aceptar"
        />

      <Stepper steps={["Paso 1", "Paso 2", "Paso 3", "paso 4"]} />
      {/* <VistaConsulta data={items} headers={headers} /> */}
      
      <div className="bg-cyan-200">
      <button onClick={() => setIsModalVisible(true)}>Mostrar Modal</button>

      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        size="pequeño"
        no_proyecto="Proyecto 123"
        nombre_titulo="Título del Modal"
        showClose={true}
        title={<h2>Título Personalizado</h2>}
        closeOnEscape={true}
        headerTextClass="text-red-500"
        headerClass="bg-blue-500"
        childCardClass="p-6"
      >
        {/* Aquí puedes colocar el contenido que desees dentro del modal */}
        <p>Contenido del modal...</p>
      </Modal>
    </div>
    

      {/* Resto del código */}
      </div>
    </>
   
  );
};

// Exporta el componente principal
export default ClientesPage;