"use client";
import React, { useEffect, useState } from "react";
import { Pedidos } from "@prisma/client";
// import DataTable from "../../components/DataTable";

import dynamic from "next/dynamic";
import presets from "../../utils/globalPresets"
import { usePedidos } from "../../context/PedidosContext";
import { pedidosColumns } from "../../models/pedidos/pedidosModel";
import Modal from "../../components/Modals";
import SuccessModal from "../../components/SuccessModal";
import { transformPedidosToRows } from "../../models/pedidos/pedidosModel";
import DynamicForm from "../../components/DynamicForm";
import pedidosProps from "../../models/pedidos/pedidosProps";
import useHasMounted from "../../hooks/useHasMounted";
import Loadig from "../../components/Loading";
import BtnAppBar from "../../components/appBar";
import fetchedHeaders from "../../models/pedidos/encabezadoPedidosModel"

const DataTable = dynamic(() => import("vComponents/dist/DataTable"), { ssr: false });



const columns = Object.keys(pedidosColumns).map((key) => ({
  key,
  label: pedidosColumns[key]
}));

// const columns = (Object.keys(pedidosColumns) as (keyof Pedidos)[]).map(
//   (key) => ({ key, label: pedidosColumns[key] })
// );

function PedidosPage() {
  const {
    pedidos,
    loadPedidos,
    createPedidos,
    deletePedidos,
    selectedPedidos,
    setSelectedPedidos,
    updatePedidos,
  } = usePedidos();

  const [headers, setHeaders] = useState([]); // Define tus cabeceras aquí
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [pedidosToDelete, setPedidosToDelete] = useState(null);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    loadPedidos();
  }, []);

  const openDeleteModal = (pedido) => {
    setPedidosToDelete(pedido);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setPedidosToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleEditPedidos = (pedido) => {
    setSelectedPedidos(pedido);
    setIsFormVisible(true);
  };

  const handleDelete = (pedido) => {
    openDeleteModal(pedido);
  };

  const handleNewClick = () => {
    setSelectedPedidos(null);
    setIsFormVisible(true);
  };

  const handleCreateOrUpdatePedidos = async (formData) => {
    try {
      if (selectedPedidos) {
        // Estás editando un cliente existente
        await updatePedidos(selectedPedidos.id, formData);
      } else {
        // Estás creando un nuevo cliente
        await createPedidos(formData);
      }
      setIsFormVisible(false);
      setSelectedPedidos(null);
      loadPedidos();
    } catch (error) {
      console.error("Error al crear o actualizar el Pedido:", error);
    }
  };

  const handleUpdateClick = async (formData) => {
    try {
      if (selectedPedidos) {
        // Estás editando un cliente existente
        await updatePedidos(selectedPedidos.id, formData); // Envía los datos actualizados al servidor
      }
      setIsFormVisible(false);
      setSelectedPedidos(null);
      loadPedidos();
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

    
  const rowsPedidos = transformPedidosToRows(pedidos);

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return <Loadig />;
  }

  return (
    <div className="mt-16">
      <BtnAppBar />
      <div className="ml-10">
      <DataTable headers={headers} items={rowsPedidos}  presets={presets} 
       onNewItem={handleNewClick}
       onEditItem={handleEditPedidos} 
       onDeleteItem={handleDelete}
       
      />
        {/* <DataTable
          title={"Pedidos"}
          // @ts-ignore
          data={rowsPedidos}
          columns={columns}
          onEdit={handleEditPedidos}
          // @ts-ignore
          onDelete={handleDelete}
          onNew={handleNewClick}
        /> */}
        <Modal
          isOpen={isDeleteModalOpen}
          title="Confirmar Eliminación"
          message={`¿Estás seguro de que deseas eliminar la Materia Prima ${pedidosToDelete?.cliente_id}?`}
          onConfirm={async () => {
            try {
              if (pedidosToDelete) {
                await deletePedidos(pedidosToDelete.id);
                closeDeleteModal();
                setIsDeleteSuccess(true);
                loadPedidos();
              }
            } catch (error) {
              console.error("Error al eliminar el Pedido:", error);
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
          message="El pedido se ha eliminado correctamente."
          buttonText="Aceptar"
        />

        <Modal
          isOpen={isFormVisible}
          title={selectedPedidos ? "Editar Pedido" : "Nueva Pedido"}
          onCancel={() => {
            setIsFormVisible(false);
            setSelectedPedidos(null);
          }}
          showCancelButton={true}
          showConfirmButton={false}
          showUpdateButton={false}
          // @ts-ignore
          onConfirm={handleCreateOrUpdatePedidos}
        >
          <DynamicForm
            // @ts-ignore
            formProps={pedidosProps}
            onSubmit={handleCreateOrUpdatePedidos}
            showCreateButton={!selectedPedidos}
            showUpdateButton={!!selectedPedidos}
            initialFormData={selectedPedidos}
            // @ts-ignore
            onUpdateClick={handleUpdateClick} // Pasa la función handleUpdateClick al DynamicForm
            columns={2}
          />
        </Modal>
      </div>
    </div>
  );
}

export default PedidosPage;
