import React from 'react'
import { useCartStore } from '../../store/cart';

const ProductItem = ({product}) => {

    const { addToCart } = useCartStore();

    return (
        <>
            <div className="w-full border border-gray-200 rounded-lg min-h-80 shadow bg-zinc-200">
                <img className="rounded-lg h-48 object-cover w-full" src={product.thumbnail}/>

                <div className="px-5 pb-5 flex flex-col gap-2 mt-4">
                    <h5 className="text-xl font-semibold text-gray-900">
                        {product.title}
                    </h5>
                    <div className="text-ellipsis overflow-hidden h-24">
                        {product.description}
                    </div>
                    <div className="flex flex-col items-center justify-between md:flex-row">
                    <span className="text-3xl font-bold text-gray-900">
                        ${product.price}
                    </span>
                    
                    <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg 
                        text-sm px-5 py-2.5 text-center" onClick={()=>addToCart(product)}>
                        Add to Cart
                    </button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default ProductItem;