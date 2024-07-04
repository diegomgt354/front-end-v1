import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TbChevronLeft } from "react-icons/tb";
import { deleteInvoice, getInvoice, updateInvoiceStatus } from "../services/invoices";
import BaseButton from "../components/shared/BaseButton";
import InvoicesStatus from "../components/invoices-page/InvoicesStatus";
import InvoicesDescripion from "../components/invoices-page/InvoicesDescripion";
import { toast } from "sonner";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const InvoicesDetailPage = () => {
    const { id } = useParams();

    const navigate = useNavigate()

    const [invoice, setInvoice] = useState({})
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        getInvoice(id)
            .then(data => setInvoice(data))
    }, [id, refresh])

    const handleMarkAsPaid = async () => {
        toast.success('Invoice marked as paid')
        const response = await updateInvoiceStatus(id, 'paid');
        if (response) {
            setRefresh(!refresh);
        }
    }

    const handleMarkAsDraft = async () => {
        toast.success('Invoice marked as draft')
        const response = await updateInvoiceStatus(id, 'draft');
        if (response) {

            setRefresh(!refresh);
        }
    }

    const handleInvoiceDelete = async () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "rounded-full px-5 py-4 font-semibold bg-red-400 hover:bg-red-500",
                cancelButton: "rounded-full px-5 py-4 font-semibold bg-blue-400 hover:bg-blue-500"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteInvoice(id);
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your invoice has been deleted.",
                    icon: "success"
                });
                navigate('/invoices');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your invoice is safe :)",
                    icon: "error"
                });
            }
        });
    }


    return (
        <>
            <section className="w-full md:w-[740px] m-auto flex flex-col gap-5 text-white">
                <div className="flex justify-between items-center">

                    <Link to="/invoices"
                        className="text-white font-bold flex gap-5 items-center">
                        <TbChevronLeft />
                        Go Back
                    </Link>

                    <BaseButton
                        bgColor="bg-red-500"
                        label={<FaRegTrashAlt />}
                        onClick={handleInvoiceDelete}
                        classx="hover:bg-red-600"
                    />

                </div>


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
                                classx="min-w-[100px]"
                            />

                        </Link>

                        <BaseButton
                            bgColor="bg-red-500"
                            label="Mark as Draft"
                            classx="min-w-[100px]"
                            onClick={handleMarkAsDraft}
                        />


                        <BaseButton
                            bgColor="bg-violet-500"
                            label="Mark as Paid"
                            classx="min-w-[100px]"

                            onClick={handleMarkAsPaid}
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