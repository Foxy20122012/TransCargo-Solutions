import ProductCard from '../../components/ProductCard';
import { conn } from '../../libs/mysql'
import axios from 'axios';
// import Navbar from '../../components/Navbar';
import BtnAppBar from '../../components/appBar'

async function loadProducts() {
  const { data } = await axios.get('http://localhost:3000/api/products');
  return data;
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
