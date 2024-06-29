import { create } from 'zustand';

export const useCartStore = create((set, get)=>({
    cart: [], // estado inicial

    addToCart: (newProduct) => {
        // action
        const productInCartIndex = get().cart.findIndex(
            p => p.id === newProduct.id
        )

        if (productInCartIndex >= 0) {
            const newCart = get().cart.map((product) => {
                
                if (product.id === newProduct.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return product;
            })
            set(() => ({
                cart: newCart
            }))
            return;
        }

        set((state) => ({
            // cart: [...state.cart, product]
            cart: [...state.cart, {...newProduct, quantity: 1}]
        }))
    },
    removeToCart: (newProduct) => {
        // action

        console.log(newProduct.quantity);
        
        const productInCartIndex = get().cart.findIndex(
            p => p.id === newProduct.id
        )

        if(newProduct.quantity === 1){
            set(state => ({
                cart: state.cart.filter(product => product.id !== newProduct.id)
            }))
        }

        if (productInCartIndex >= 0) {
            const newCart = get().cart.map((product) => {
                
                if (product.id === newProduct.id) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }
                return product;
            })
            set(() => ({
                cart: newCart
            }))
            return;
        }

    },
    removeFromCart: (id) => {
        set(state => ({
            cart: state.cart.filter(product => product.id !== id)
        }))
    },
    cleanCart: () => {
        set(() => ({
            cart: []
        }))
    },


}));