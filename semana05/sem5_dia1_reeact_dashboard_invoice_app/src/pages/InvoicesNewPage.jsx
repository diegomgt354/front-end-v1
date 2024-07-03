import { useState } from "react";
import { TbChevronLeft } from "react-icons/tb";
import { Link } from "react-router-dom";

const InvoicesNewPage = () => {

  const INITIAL_FORM_VALUES = {

  }

  const [form, setForm] = useState(INITIAL_FORM_VALUES);

  return (
    <section>
      <Link to="/invoices"
        className="text-white font-bold flex gap-5 items-center">
        <TbChevronLeft />
        Go Back
      </Link>

      <header className="">
        <h1>New Invoice</h1>
      </header>

    </section>
  )
}

export default InvoicesNewPage;