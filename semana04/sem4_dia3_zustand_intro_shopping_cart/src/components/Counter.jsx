import React from 'react'
import { useCounterStore } from '../store/counter';

const Counter = () => {

    const { count, increment, decrement, incrementByValue, decrementByValue } = useCounterStore();

    return (
        <section className='flex flex-col items-center bg-[#886ad8] p-4'>
            <h3 className='text-2xl'>Counter with Zustand</h3>
            <div className='flex items-center gap-4 mt-4'>
                <button className='h-[50px] w-[50px] bg-emerald-500 rounded-full' onClick={()=>decrementByValue(10)}>-10</button>
                <button className='h-[50px] w-[50px] bg-emerald-500 rounded-full' onClick={decrement}>-1</button>
                <span className='font-bold text-5xl text-white'>{count}</span>
                <button className='h-[50px] w-[50px] bg-emerald-500 rounded-full' onClick={increment}>+1</button>
                <button className='h-[50px] w-[50px] bg-emerald-500 rounded-full' onClick={()=>incrementByValue(10)}>+10</button>
            </div>
        </section>
    )
}

export default Counter;