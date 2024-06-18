import React from 'react'
import { useState } from 'react'

export default function App() {

  const formatNumber = number => new Intl.NumberFormat('de-DE', { currency: 'EUR', maximumFractionDigits: 2 }).format(number);


  const [weight, setWeight] = useState(50); // retorna variable lectura y escritura(setter)
  const handlerWeight = (event) => {
    setWeight(event.target.value);
  }

  const [height, setHeight] = useState(50); // retorna variable lectura y escritura(setter)
  const handlerHeight = (event) => {
    setHeight(event.target.value);
  }

  let imc = weight/(height*0.01)**2;

  const printResult = () => {
    let result = "";

    if(imc<18.5){
      result = "Baja";
    }else if(imc<=24.9){
      result = "Normal";
    }else if(imc<=29.9){
      result = "Normal";
    }else{
      result = "Sobrepeso";
    }

    return result;
  }
  


  return (
    <>
      <section className='w-[300px] mx-auto bg-slate-200 p-4 mt-4'>
        <h1 className='text-center text-red-600 font-bold'>IMC Calculator</h1>
        <div className='pt-4'>
          <p>Weight: {weight} kg</p>
          <input type="range" min="50" max="200" 
          onChange={handlerWeight}/>
        </div>

        <div>
          <p>Height: {height} cm</p>
          <input type="range" min="50" max="200" 
          onChange={handlerHeight}/>
        </div>

        <p className='font-bold'>Tu IMC es {formatNumber(imc)}</p>
        <p className='font-bold text-2xl text-center'>{printResult()}</p>
      </section>
    </>
  )
}