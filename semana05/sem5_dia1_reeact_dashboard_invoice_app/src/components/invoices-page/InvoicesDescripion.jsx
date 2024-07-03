import InvoicesItems from "./InvoicesItems";

const InvoicesDescripion = ({ invoice }) => {

    const paymentDate = () => {
        const countDays = invoice.invoice?.paymentTerms.split(' ')[1];
        const base = new Date(invoice.invoice?.date);
        const addDays = new Date(base.getTime() + parseInt(countDays) * 24 * 60 * 60 * 1000); // +30*milisegundosXdia
        return addDays.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    return (
        <section className="bg-slate-700 rounded-lg p-10">

            <div className="flex justify-between items-center">

                <div>
                    <div className="flex items-center">
                        <span className="text-slate-400 text-2xl">#</span>
                        <span className="font-extrabold uppercase pl-2 text-2xl">{invoice.code}</span>
                    </div>
                    <span className="text-slate-400">{invoice.invoice?.project?.description}</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-right text-slate-400">{invoice.bill?.from?.streetAddress}</span>
                    <span className="text-right text-slate-400">{invoice.bill?.from?.city}</span>
                    <span className="text-right text-slate-400">{invoice.bill?.from?.postCode}</span>
                    <span className="text-right text-slate-400">{invoice.bill?.from?.country}</span>
                </div>

            </div>

            <div className="grid grid-cols-3 py-5">

                <div className="flex flex-col">
                    <span className="text-slate-400">Invoice Date</span>
                    <span className="font-extrabold">{invoice.invoice?.date}</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-slate-400">Bill to</span>
                    <span className="font-extrabold">{invoice.bill?.to?.client?.name}</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-slate-400">Sent to</span>
                    <span className="font-extrabold">{invoice.bill?.to?.client?.email}</span>
                </div>

            </div>

            <div className="grid grid-cols-3 pb-8">

                <div className="flex flex-col">
                    <span className="text-slate-400">Payment Due</span>
                    <span className="font-extrabold">{paymentDate()}</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-slate-400">{invoice.bill?.to?.streetAddress}</span>
                    <span className="text-slate-400">{invoice.bill?.to?.city}</span>
                    <span className="text-slate-400">{invoice.bill?.to?.postCode}</span>
                    <span className="text-slate-400">{invoice.bill?.to?.country}</span>
                </div>

            </div>

            <InvoicesItems
                key={invoice.id}
                items={invoice.invoice?.items}
                symbol={invoice.invoice?.currency?.symbol} />

        </section>
    )
}

export default InvoicesDescripion