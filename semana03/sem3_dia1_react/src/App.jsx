import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// function
export function NewApp() {
  return <h1>Hola mundo!</h1>
}

// arrow function
export const NewApp2 = () => <h1>Hola mundo 2!</h1>

// multiples lineas en un fragmento
export const NewApp3 = () => {
  return (
    <>
      <h1>Hola mundo 3!</h1>
      <p>Esto es un parrafo</p>
    </>
  )
}

// rfce y rfc (react functional component example)


// metodos de renderizado
const Saludo = () => {
  return <h4>Buenas noches!</h4>
}

const Despedida = () => {
  return <h4>Ya me voy a dormir!</h4>
}

// consumo de metdodos de renderizado
export const NewApp4 = () => {
  return (
    <>
      {/* {Saludo()} */}
      {/* {Despedida()} */}
      <Saludo />
      <Despedida />

    </>
  )
}


import { Mensaje } from './components/Mensaje.jsx'
import { Consejo } from './components/Consejo.jsx'

export const NewApp5 = () => {

  return (
    <>
      <Mensaje />
      <Consejo />
      {/* esto es un comentario */}

    </>
  )
}

import { FRUTAS, COLORES } from './components/Colores.js'

export const NewApp6 = () => {

  return (
    <>
      {FRUTAS.map((fruta) => (
        <li key={fruta}>{fruta}</li>
      ))}
      {COLORES.map((color) => (
        <li style={{ color: color, fontSize: "40px"  }}>{color}</li>
      ))}

    </>
  )
}




export default App
