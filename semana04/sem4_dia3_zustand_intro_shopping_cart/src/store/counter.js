import { create } from 'zustand';

// create store 
export const useCounterStore = create(
    (set) => ({
        count: 23, // estado inicial
        increment: () => {
            set(state => { 
                return {
                    count: state.count + 1
                }
            })
        },
        decrement: () => set(state => ({ count: state.count - 1 })),
        incrementByValue: (value) => set(state => ({ count: state.count + value })),
        decrementByValue: (value) => set(state => ({ count: state.count - value })),
    })
);