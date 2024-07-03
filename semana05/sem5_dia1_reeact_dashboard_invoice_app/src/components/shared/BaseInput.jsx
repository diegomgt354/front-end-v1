const BaseInput = ({
    type = 'text',
    name,
    classx,
    label,
    value,
    placeholder,
    onChange
}) => {
    return (
        <label className={`text-white flex flex-col gap-2 mb-4 ${classx}`}>
            <span>{label}</span>
            <input
                type={type}
                name={name}
                className="w-full py-4 px-5 rounded-lg bg-slate-800"
                value={value}
                placeholder={placeholder}
                onChange={(event) => onChange(event)}
            />
        </label>
    )
}

export default BaseInput