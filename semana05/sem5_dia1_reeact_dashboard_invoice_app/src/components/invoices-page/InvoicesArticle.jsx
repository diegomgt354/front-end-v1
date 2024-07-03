import { TbChevronRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import InvoicesStatus from "./InvoicesStatus";
const InvoicesArticle = ({ invoice }) => {
    return (
        <article
            className="grid grid-cols-6  text-white bg-slate-800 p-4 rounded-lg m-2">
            <div className="flex items-center justify-center">
                <span className="text-slate-400">#</span>
                <span className="font-extrabold uppercase pl-2">{invoice.code}</span>
            </div>
            <div className="flex items-center">{invoice.invoice.date}</div>
            <div className="flex items-center">{invoice.bill.to.client.name}</div>
            <div className="w-44 text-2xl font-extrabold flex items-center">
                {invoice.invoice.currency.symbol}
                {invoice.invoice.grandTotal}
            </div>

            <InvoicesStatus
                status={invoice.status}
            />

            <div className="w-10  mx-5">
                <Link to={`/invoices/${invoice.id}`} className="">
                    <TbChevronRight className="text-right p-2 text-indigo-700 text-6xl rounded-full hover:bg-indigo-700 hover:text-slate-800 hover:duration-300" />
                </Link>
            </div>
        </article >
    )
}

export default InvoicesArticle