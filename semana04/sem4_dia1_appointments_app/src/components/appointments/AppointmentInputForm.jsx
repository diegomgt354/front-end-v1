import React from 'react'

const AppointmentInputForm = (props) => {

    const {type, name, placeholder, value, handleChangeAppointment } = props;
    
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className='border p-3 shadow-md rounded-md w-full'
            value={value}
            onChange={handleChangeAppointment}
        />
    )
}

export default AppointmentInputForm;