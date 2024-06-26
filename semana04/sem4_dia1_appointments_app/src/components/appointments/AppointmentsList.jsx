import React from 'react'
import AppointmentItem from './AppointmentItem';

const AppointmentsList = ({ appointments, onConfirmAppointment, onRemoveAppointment, onEditAppointment }) => {

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

            <section className='bg-white rounded-lg w-[400px]'>
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

            <section>
                <h1 className="text-2xl text-center">JSON</h1>
                <div className='text-left w-full bg-blue-100 border my-3 p-3 border-blue-500 rounded-md'>
                    <pre className="w-full overflow-auto whitespace-pre-wrap">{JSON.stringify(appointments, null, 2)}</pre>
                </div>
            </section>
            
        </>
    )
}
}

export default AppointmentsList;