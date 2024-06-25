import React from 'react'
import AppointmentItem from './AppointmentItem';

const AppointmentsList = ({ appointments, onRemoveAppointment, onEditAppointment }) => {

    {
        if(appointments.length === 0){
            return (
                <div className='p-4 bg-white rounded-lg w-[400px]'>
                    <h2 className='text-2xl mb-4 text-center'>No hay Citas</h2>
                </div>
            )
    }

    return (
        <>

            <section className='p-4 bg-white rounded-lg w-[400px]'>
                <h2 className='text-2xl mb-4 text-center'>Citas</h2>

                {
                    appointments.map((a) => {
                        return (

                            <AppointmentItem
                                key={a.id}
                                appointment = {a}
                                onRemoveAppointment = {onRemoveAppointment}
                                onEditAppointment = {onEditAppointment}
                            />
                            
                        )
                    })

                }
            </section>

            <pre>{JSON.stringify(appointments, null, 2)}</pre>
        </>
    )
}
}

export default AppointmentsList;