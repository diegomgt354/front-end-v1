import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const InvoicesHeader = () => {
    return (
        <header className="container flex justify-between w-full items-center md:w-[740px] m-auto bg-slate-900 my-20">
            <div className="text-white">
                <h1 className="text-4xl font-extrabold">Invoices</h1>
                <span className="font-medium">There are 7 total invoices</span>
            </div>

            <div className="flex gap-4 justify-between items-center">

                <div className="flex gap-4 justify-between items-center text-white">
                    <span>Filter by status</span>
                    <RiArrowDownSLine className="text-indigo-600 text-3xl" />
                    {/* <select>
                        <option value="all">All</option>
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                        <option value="draft">Draft</option>
                    </select> */}
                </div>
                <Link to="/invoices/new">
                    <button className="bg-indigo-400 rounded-full px-5 py-3 font-extrabold text=white flex justify-between 
                items-center hover:bg-indigo-600 duration-300 text-white">
                        <TbSquareRoundedPlusFilled size="2rem" />
                        New Invoice
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default InvoicesHeader