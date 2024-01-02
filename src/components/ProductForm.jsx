"use client";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });
  const [file, setFile] = useState(null);
  const form = useRef(null);
  const router = useRouter();
  const params = useParams();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (params.id) {
      axios.get("/api/products/" + params.id).then((res) => {
        setProduct({
          name: res.data.name,
          price: res.data.price,
          description: res.data.description,
        });
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);

    if (file) {
      formData.append("image", file);
    }

    try {
      if (!params.id) {
        await axios.post("/api/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        await axios.put("/api/products/" + params.id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      // Si la solicitud Axios se completa correctamente, reseteamos el formulario y redirigimos.
      form.current.reset();
      await router.push("/products");  // Asegurémonos de esperar a que la redirección se complete antes de continuar.
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-96" onSubmit={handleSubmit} ref={form}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-black" htmlFor="name">Modelo Del Vehiculo<span className="text-red-500">(*)</span>:</label>
          <input
            name="name"
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            value={product.name}
            className="border p-2 w-full rounded"
            autoFocus
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-black" htmlFor="price">Numero De La Placa Del Vehiculo<span className="text-red-500">(*)</span>:</label>
          <input
            name="price"
            type="text"
            placeholder="Numero de matricula"
            onChange={handleChange}
            value={product.price}
            className="border p-2 w-full rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-black" htmlFor="description">Descripción Del Vehiculo<span className="text-red-500">(*)</span>:</label>
          <textarea
            name="description"
            rows={3}
            placeholder="Descripción"
            onChange={handleChange}
            value={product.description}
            className="border p-2 w-full rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-black" htmlFor="productImage">Imagen Del Vehiculo<span className="text-red-500">(*)</span>:</label>
          <input
            type="file"
            className="border p-2 w-full rounded"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        {file && <img className="w-full h-32 object-contain mb-4" src={URL.createObjectURL(file)} alt="" />}

        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          {params.id ? "Actualizar Producto" : "Crear Producto"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
