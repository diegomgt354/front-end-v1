import { TbPointFilled } from "react-icons/tb"

const BaseTag = ({ status, bgColor, textColor }) => {
    return (
        <>
            <div className={`flex justify-center items-center gap-1 min-w-[120px] ${bgColor} ${textColor} py-4 px-4
                 bg-opacity-30 rounded-lg font-extrabold`}>
                <TbPointFilled className="text-3xl" />
                {status}
            </div>
        </>
    )
}

export default BaseTag