'use client'

import dynamic from "next/dynamic";
import React, { useState } from "react";
import ProductForm from "../../../components/ProductForm";

const VDialog = dynamic(() => { return import("vComponents/dist/VDialog") }, { ssr: false });

const ProductsFormsPage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
      
<div className="text-black">
<div className="uppercase font-bold text-gray-500 flex justify-between items-center text-lg">
  <span>Vehículos</span>
  <button 
      onClick={() => setIsModalVisible(true)}
      className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-400
      text-white font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-xl transition duration-300 "
  >
      Nuevo Vehículo
  </button>
</div>

    <VDialog
        isOpen={isModalVisible}
        size='sm'
        onClose={handleCloseModal}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
        <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-400 p-4 text-white">
            <h1 className="text-3xl font-extrabold text-center mb-2">¡Agrega un Nuevo Vehículo!</h1>
        </div>
        
        <div className="p-6">
            {/* Aquí incluyes tu componente ProductForm dentro del VDialog */}
            <ProductForm />
        </div>
        
        {/* Botón para cerrar el dialog. */}
        <div className="flex justify-end  bg-gray-100">
            <button 
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md shadow-md hover:shadow-xl transition duration-300"
                onClick={handleCloseModal}
            >
                Cerrar
            </button>
        </div>
    </VDialog>
</div>


    );
}

export default ProductsFormsPage;
