// 'use client'
import ProductCard from '../../../components/ProductCard';
import { conn } from '../../../libs/mysql';
import BtnAppBar from '../../../components/appBar';

async function loadProducts() {
  try {
    // Conectar a la base de datos
    const db = await conn;

    // Realizar la consulta para obtener los productos
    const products = await db.query('SELECT * FROM product');

    // Liberar la conexión a la base de datos
    await db.end();

    return products;
  } catch (error) {
    console.error('Error al cargar los productos:', error);
    throw error;
  }
}

async function ProductsCardsPage() {
  try {
    const products = await loadProducts();

    return (
      <div>
        <BtnAppBar />
        <section className='container mx-auto mt-16 px-4 sm:px-8'>
          <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {products.map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>
      </div>
    );
  } catch (error) {
    // Manejar el error aquí si es necesario
    console.error('Error al obtener los productos:', error);
    // Aquí puedes renderizar un mensaje de error en tu UI si lo deseas
    return <div>Error al cargar los productos.</div>;
  }
}

export default ProductsCardsPage;
