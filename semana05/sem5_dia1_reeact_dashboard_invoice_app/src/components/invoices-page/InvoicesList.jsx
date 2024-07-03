import InvoicesArticle from "./InvoicesArticle"

const InvoicesList = ({ invoices }) => {
    return (
        <>
            {/* <h2>Invoices List</h2>
            <pre>{JSON.stringify({ invoices }, null, 2)}</pre> */}

            {
                invoices && invoices.map((invoice) => {
                    return (
                        <InvoicesArticle
                            key={invoice.id}
                            invoice={invoice} />
                    )
                })
            }
        </>
    )
}

export default InvoicesList