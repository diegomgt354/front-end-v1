import BaseTag from "../shared/BaseTag"

const InvoicesStatus = ({ status }) => {
    return (
        <>

            {status === 'paid' &&
                <BaseTag
                    status={status}
                    bgColor="bg-emerald-400/20"
                    textColor="text-emerald-500"
                />
            }

            {status === 'pending' &&
                <BaseTag
                    status={status}
                    bgColor="bg-orange-400"
                    textColor="text-orange-500"
                />
            }

            {status === 'draft' &&
                <BaseTag
                    status={status}
                    bgColor="bg-slate-400"
                    textColor="text-slate-500"
                />
            }
        </>
    )
}

export default InvoicesStatus