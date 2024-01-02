"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import dynamic from "next/dynamic";
import SuccessModal from "../../../components/SuccessModal";

const VDialog = dynamic(() => { return import("vComponents/dist/VDialog") }, { ssr: false });

function Buttons({ productId }) {
  const router = useRouter();
  const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false); // Estado para controlar la visibilidad del diálogo de eliminar
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isEditDialogVisible, setIsEditDialogVisible] = useState(false); // Estado para controlar la visibilidad del diálogo de editar


  const handleDelete = async () => {
    const res = await axios.delete("/api/products/" + productId);
    if (res.status === 204) {
      setIsSuccessModalVisible(true);
      router.push("/products");
      router.refresh();
    }
  };
  
  const handleEdit = () => {
    // Aquí puedes agregar la lógica que desees para editar el producto.
    // Por ahora, simplemente redirigiremos al usuario a la página de edición.
    router.push(`/products/edit/${productId}`);
  };

  return (
    <div className="flex gap-x-2 justify-end mt-2">
      {/* Botón para eliminar */}
      <button
        className="text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
        onClick={() => setIsDeleteDialogVisible(true)} // Mostrar el diálogo al hacer clic
      >
        Delete
      </button>

      {/* Botón para editar */}
      <button
        className="text-white bg-green-500 hover:bg-green-700 py-2 px-3 rounded"
        onClick={() => setIsEditDialogVisible(true)} // Mostrar el diálogo al hacer clic
      >
        Edit
      </button>

      {/* VDialog para la confirmación de edición */}
      {isEditDialogVisible && (
        <VDialog
          isOpen={isEditDialogVisible}
          size='sm'
          className='-translate-x-1/2 bg-black bg-opacity-25'
        >
          <div className="p-4">
            <p>Are you sure you want to edit this product?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsEditDialogVisible(false)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleEdit}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </VDialog>
      )}

      {/* VDialog para la confirmación de eliminación */}
      {isDeleteDialogVisible && (
        <VDialog
          isOpen={isDeleteDialogVisible}
          size='sm'
          className='-translate-x-1/2 bg-black bg-opacity-25'
        >
          <div className="p-4">
            <p>Are you sure you want to delete this product?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsDeleteDialogVisible(false)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </VDialog>
      )}

      {isSuccessModalVisible && (
        <SuccessModal
          isOpen={isSuccessModalVisible}
          onClose={() => setIsSuccessModalVisible(false)}
          message="El producto se ha eliminado correctamente."
          buttonText="Aceptar"
        />
      )}
    </div>
  );
}

export default Buttons;
