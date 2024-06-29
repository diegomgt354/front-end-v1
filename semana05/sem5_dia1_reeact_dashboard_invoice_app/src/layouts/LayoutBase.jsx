import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutBase = () => {
    return (
        <div>
            <h1>Header</h1>
            <Outlet />
        </div>
    )
}

export default LayoutBase