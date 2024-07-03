import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TbChevronLeft } from "react-icons/tb";
import { getInvoice } from "../services/invoices";
import BaseButton from "../components/shared/BaseButton";
import InvoicesStatus from "../components/invoices-page/InvoicesStatus";
import InvoicesDescripion from "../components/invoices-page/InvoicesDescripion";

const InvoicesDetailPage = () => {
    const { id } = useParams();

    const [invoice, setInvoice] = useState({})

    useEffect(() => {
        getInvoice(id)
            .then(data => setInvoice(data))
    }, [])

    return (
        <>
            <section className="w-full md:w-[740px] m-auto flex flex-col gap-5 text-white">
                <Link to="/invoices"
                    className="text-white font-bold flex gap-5 items-center">
                    <TbChevronLeft />
                    Go Back
                </Link>


                <header className="flex justify-between bg-slate-700 py-4 px-8 mt-10 rounded-lg">
                    <div className="flex items-center gap-3">
                        <h3>Status</h3>
                        <InvoicesStatus status={invoice.status} />
                    </div>

                    <div className="flex items-center gap-3">
                        <Link to={`/invoices/${invoice.id}/edit`}>
                            <BaseButton
                                bgColor="bg-indigo-400"
                                label="Edit"
                            />

                        </Link>

                        <BaseButton
                            bgColor="bg-red-500"
                            label="Delete"
                        />

                        <BaseButton
                            bgColor="bg-violet-500"
                            label="Mark as Paid"
                        />
                    </div>


                </header>

                <InvoicesDescripion invoice={invoice} />





                <pre>{JSON.stringify({ invoice }, null, 2)}</pre>
            </section >
        </>
    )
}

export default InvoicesDetailPage