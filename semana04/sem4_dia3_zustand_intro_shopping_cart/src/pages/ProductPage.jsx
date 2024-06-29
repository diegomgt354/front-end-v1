import React from 'react';
import ProductHeader from './product-page/ProductHeader';
import ProductList from './product-page/ProductList';

const ProductPage = () => {
    return (
        <>
            <ProductHeader />
            <header>
                <main className='container py-4 px-6 mx-auto border mt-20'>
                    <ProductList />
                </main>

            </header>
        </>
    )
}

export default ProductPage;