import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { fetchProductsWithAPIAxios } from '../../services/products';

const ProductList = () => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetchProductsWithAPIAxios().then(data => setProductList(data.products));
    }, []);
    
    return (
        <section className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
                productList.map(product => (
                    <ProductItem 
                        key={product.id}
                        product={product}
                    />
                ))
            }
            {/* <pre>{JSON.stringify(productList, null, 2)}</pre> */}
        </section>
    )
}

export default ProductList;