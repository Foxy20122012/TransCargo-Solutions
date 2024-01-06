

import ProductsCardsPage from '../../app/products/productsCards/page';

const ProductsPage = () => {
    return (
        <div>
        {/* <BtnAppBar /> */}
        <section className='mt-20'> {/* Ajustamos el padding para pantallas más pequeñas */}
            <div className=''>
                {/* <ProductsFormsPage /> */}
                <ProductsCardsPage />
            </div>
        </section>
        </div>
    );
    }

    export default ProductsPage;