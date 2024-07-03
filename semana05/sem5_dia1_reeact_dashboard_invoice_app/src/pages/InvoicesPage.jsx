import InvoicesList from '../components/invoices-page/InvoicesList'
import InvoicesHeader from '../components/invoices-page/InvoicesHeader'
import { useEffect, useState } from 'react'
import { fetchInvoices } from '../services/invoices'

// https://668348414102471fa4c9a487.mockapi.io/api/v1/invoices
const InvoicesPage = () => {

  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    fetchInvoices()
      .then(data => setInvoices(data))
  }, []);

  return (
    <>
      <InvoicesHeader />
      <InvoicesList
        invoices={invoices}
      />
    </>
  )
}

export default InvoicesPage