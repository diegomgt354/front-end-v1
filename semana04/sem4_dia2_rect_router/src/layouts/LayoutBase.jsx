import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutBase = () => {
    return (
        <>
            <Navbar />
            {/* Outlet renderiza el contenido del componente*/}
            {/* es decir las rutas que estan internamente en el componente LayoutBase */}
            <div className='container mx-auto p-4'><Outlet /></div> 
        </>
    )
}

export default LayoutBase