import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">React Router</span>
                </Link>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
                bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                    <li>
                        <Link to='/' 
                        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent 
                        md:text-blue-700 md:p-0" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link to='/login' 
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                        md:border-0 md:hover:text-blue-700 md:p-0">Login</Link>
                    </li>
                    <li>
                        <Link to='/register' 
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                        md:border-0 md:hover:text-blue-700 md:p-0">Register</Link>
                    </li>
                    <li>
                        <Link to='/pokedex' 
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                        md:border-0 md:hover:text-blue-700 md:p-0">Pokedex</Link>
                    </li>
                    <li>
                        <Link to='/profile' 
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                        md:border-0 md:hover:text-blue-700 md:p-0">Profile</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;