import React, { useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { FaRegTrashCan } from "react-icons/fa6";
import { useCartStore } from '../../store/cart';

const ProductHeader = () => {

  const [open, setOpen] = useState(false);
  const showCart = open ? 'translate-none' : 'translate-x-full';
  const toggleSidebar = () => setOpen(!open);

  const { cart, addToCart, removeToCart, removeFromCart, cleanCart } = useCartStore();

  const cartCount = cart.length;

  const classSidebar = 'fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-slate-100 w-80 text-black'


  return (
    <div className="bg-lime-600 text-white py-4 px-6 w-full fixed top-0">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">Shopping Cart</h1>
      
        <button className="text-3xl relative" onClick={toggleSidebar}>
          <TiShoppingCart  />
          {cartCount > 0 && 
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-3 ">                
              {cartCount}
            </div>
          }
        </button>


        <div className={`${classSidebar} ${showCart}`}>
          <div className="flex justify-between">
            <h5 className="flex text-2xl font-semibold text-gray-500">
              Cart
            </h5>

            <button onClick={toggleSidebar}>❌</button>
          </div>


        {cartCount > 0 && 
            <div className="py-3">
              <button
                className="w-full text-slate-900 bg-red-400 hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={cleanCart}
              >
                Clean Cart
              </button>
            </div>
          }

          <div className="flex flex-col gap-1">
            {
              cart.map(p => (
                <div
                  key={p.id}
                  className='flex items-center justify-between text-slate-900 bg-zinc-200 hover:bg-zinc-300 font-medium rounded-lg text-sm p-2 mb-2 gap-2'>

                    {/* imagen */}
                    <img className="rounded-lg h-20 w-20 flex-none" src={p.thumbnail} />

                    <div className='flex flex-col grow'>

                      {/* info */}
                      <div>
                        <p>{p.title}</p>
                        <span>${parseFloat((p.price*p.quantity).toFixed(2))}</span>
                      </div>

                      {/* buttons */}
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-1 flex-none'>
                            {/* <button className='h-[50px] w-[50px] bg-emerald-500 rounded-full' onClick={decrement}>-1</button> */}
                            <button className='h-7 w-7 rounded-full border border-zinc-500' onClick={() => removeToCart(p)}>-1</button>
                            <span className='font-bold text-2xl text-zinc-500'>{p.quantity}</span>
                            <button className='h-7 w-7 rounded-full border border-zinc-500' onClick={() => addToCart(p)}>+1</button>
                            {/* <button className='h-[50px] w-[50px] bg-emerald-500 rounded-full' onClick={increment}>+1</button> */}
                        </div>
                        <button className='text-2xl text-red-500 flex-none' onClick={() => removeFromCart(p.id)}><FaRegTrashCan /></button>
                      </div>

                  </div>

                </div>

              ))
            }
          </div>

          {/* {JSON.stringify(cart, null, 2)} */}
        </div>
      </div>

    </div>
  )
}

export default ProductHeader;