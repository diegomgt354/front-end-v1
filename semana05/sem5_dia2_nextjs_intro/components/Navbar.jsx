import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Link href="/" className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</Link>
                </a>

                <div className="w-full md:block md:w-auto " id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <a href="/configuration" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Configuration</a>
                        </li>
                        <li>
                            <a href="/service" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Services</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar