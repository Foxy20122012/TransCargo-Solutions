import Buttons from "./Buttons";
import { conn } from "../../../libs/mysql";
// import Navbar from "../../../components/Navbar"

async function loadProduct(productId) {
  const [data] = await conn.query("SELECT * FROM product WHERE id = ?", [productId]);
  return data;
}

async function ProductPage({ params }) {
  const product = await loadProduct(params.id);

  return (
    <>
      {/* <Navbar /> */}
      <section className="bg-gradient-to-r from-teal-500 to-cyan-500 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img
                src={product.image}
                className="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                alt={product.name}
              />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl md:text-3xl font-semibold mb-4 text-gray-800">
                {product.name}
              </h3>
              <h4 className="text-2xl md:text-4xl font-semibold text-blue-500 mb-4">
                ${product.price.toFixed(2)}
              </h4>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <Buttons productId={product.id} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
