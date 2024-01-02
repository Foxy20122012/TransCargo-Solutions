

import ProductsCardsPage from '../../app/products/productsCards/page';
import ProductsFormsPage from '../../app/products/ProductsForms/page';
import BtnAppBar from '../../components/appBar'

const ProductsPage = () => {
    return (
        <div>
        {/* <BtnAppBar /> */}
        <section className='mt-20'> {/* Ajustamos el padding para pantallas más pequeñas */}
            <div className=''>
                <ProductsFormsPage />
                <ProductsCardsPage />
            </div>
        </section>
        </div>
    );
    }

    export default ProductsPage;