import ProductCard from '../../components/ProductCard';
import { conn } from '../../libs/mysql';
import BtnAppBar from '../../components/appBar';

async function loadProducts() {
  try {
    const [products] = await conn.query("SELECT * FROM products"); // Utilizando conn para obtener los productos
    return products;
  } catch (error) {
    console.error("Error al cargar los productos:", error);
    return [];
  }
}

async function ProductsPage() {
  const products = await loadProducts();

  return (
    <div>
      <BtnAppBar />
      <section className='container mx-auto mt-16 px-4 sm:px-8'> {/* Ajustamos el padding para pantallas más pequeñas */}
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
