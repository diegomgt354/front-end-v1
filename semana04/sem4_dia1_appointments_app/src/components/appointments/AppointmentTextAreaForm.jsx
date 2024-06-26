import React from 'react'

const AppointmentInputForm = (props) => {

    const { name, placeholder, value, handleChangeAppointment } = props;
    
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            className='border p-3 shadow-md rounded-md w-full'
            required
            rows='5'
            value={value}
            onChange={handleChangeAppointment}
        ></textarea>
    )
}

export default AppointmentInputForm;