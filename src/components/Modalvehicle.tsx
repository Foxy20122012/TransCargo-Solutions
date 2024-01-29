import React, { FC } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ModalProps {
  isOpen: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  message: string;
}

const Modalsvehicles: FC<ModalProps> = ({
  isOpen,
  title,
  onConfirm,
  onCancel,
  showCancelButton = true,
  showConfirmButton = true,
  // @ts-ignore
  children,
}) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onCancel(); // Cierra el modal antes de ejecutar onConfirm
    onConfirm();

      // Muestra el toast después de cerrar el modal y confirmar la eliminación
      toast.success("Registro eliminado correctamente", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white w-full md:w-1/2 lg:w-1/3 p-8 md:p-10 rounded-xl shadow-xl z-50 max-w-md">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">{title}</h2>
        <div className="mb-8 text-gray-700">{children}</div>
        <div className="flex justify-center md:justify-end space-x-4">
          {showCancelButton && (
            <button
              className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
              onClick={onCancel}
            >
              Cancelar
            </button>
          )}
          {showConfirmButton && (
            <button
              className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
              onClick={handleConfirm} 
            >
              Confirmar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modalsvehicles;