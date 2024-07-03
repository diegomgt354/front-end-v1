import { useState } from "react";

const InvoicesItems = ({ items, symbol }) => {

    const [sumTotal, setSumTotal] = useState(0);

    const calculateTotal = () => {
        let total = 0;
        items?.forEach(item => {
            total += item.total;
        })
        return total;
    }
    return (
        <>
            <div className="flex flex-col text-white bg-slate-800 p-10 rounded-t-lg mx-2">

                <div className="grid grid-cols-4 text-slate-400 my-2">

                    <div className="text-left">Item Name</div>
                    <div className="text-right">GTY.</div>
                    <div className="text-right">Price</div>
                    <div className="text-right">Total</div>
                </div>



                {
                    items?.map((item) => (
                        <div
                            className="grid grid-cols-4 text-white my-2">

                            <div className="text-left">{item.name}</div>
                            <div className="text-right">{item.qty}</div>
                            <div className="text-right">{item.price}</div>
                            <div className="text-right">{symbol} {item.total}</div>
                        </div>
                    ))
                }



            </div>

            <div className="flex justify-between rounded-b-lg text-white bg-slate-900 p-10 mx-2">
                <span className="text-slate-400">Amount Due</span>
                <span className="font-extrabold text-2xl">{symbol} {calculateTotal()}</span>
            </div>
        </>
    )
}

export default InvoicesItems;