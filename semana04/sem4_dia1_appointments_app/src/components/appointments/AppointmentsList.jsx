import React from 'react'
import AppointmentItem from './AppointmentItem';

const AppointmentsList = ({ appointments, onConfirmAppointment, onRemoveAppointment, onEditAppointment }) => {

    {
        if(appointments.length === 0){
            return (
                <div className='p-4 rounded-lg w-[400px]'>
                    <h2 className='text-2xl mb-4 text-center'>No hay Citas</h2>
                </div>
            )
    }

    return (
        <>

            <section  className='rounded-lg w-[400px]'>
                <h2 className='text-2xl mb-4 text-center'>Citas</h2>

                {
                    appointments.map((a) => {
                        return (

                            <AppointmentItem
                                key={a.id}
                                appointment = {a}
                                onConfirmAppointment = {onConfirmAppointment}
                                onRemoveAppointment = {onRemoveAppointment}
                                onEditAppointment = {onEditAppointment}
                            />
                            
                        )
                    })

                }
            </section>
            
        </>
    )
}
}

export default AppointmentsList;