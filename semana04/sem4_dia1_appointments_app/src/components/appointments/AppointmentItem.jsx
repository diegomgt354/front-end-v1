import React from 'react'

const AppointmentItem = ({ appointment, onConfirmAppointment, onRemoveAppointment, onEditAppointment }) => {
    return (
        <div className='flex flex-col gap-3 mb-4'>

            <article className='border-2 p-4 border-sky-300 rounded-lg bg-sky-200'>
                <div>
                    <h4 className="font-semibold text-2xl">Mascota</h4>
                    <div>
                        <strong>- Nombre: </strong> {appointment.petName}
                    </div>
                    <div>
                        <strong>- Edad: </strong> {appointment.petAge}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-2xl">Dueño</h4>
                    <div>
                        <strong>- Nombre: </strong> {appointment.ownerName}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-2xl">Cita</h4>
                    <div>
                        <strong>- Fecha: </strong> {appointment.appointmentDate}
                    </div>
                    <div>
                        <strong>- Hora: </strong> {appointment.appointmentTime}
                    </div>
                    <div>
                        <strong>- Sintomas: </strong> {appointment.sysmptoms}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-2xl">Estado</h4>
                    <div>
                        <strong>- Cita: </strong> {appointment.confirmed ? 'Confirmada' : 'Pendiente'}
                    </div>
                </div>


                <div className="flex flex-col gap-3 mt-3">
                    {
                        appointment.confirmed ?
                        (
                            <button className="p-2 bg-orange-600 text-white rounded-lg cursor-pointer hover:bg-orange-700 duration-300" 
                            onClick={() => onConfirmAppointment(appointment)}>
                                Cancelar Cita
                            </button>
                        )
                        :
                        (
                            <button className="p-2 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 duration-300" 
                            onClick={() => onConfirmAppointment(appointment)}>
                                Confirmar Cita
                            </button>
                        )
                    }
                </div>

                <div className="flex flex-col gap-3 mt-3">
                    <button className="p-2 bg-sky-600 text-white rounded-lg cursor-pointer hover:bg-sky-700 duration-300"
                    onClick={() => onEditAppointment(appointment)} >
                        Editar
                    </button>
                </div>
                
                <div className="flex flex-col gap-3 mt-3">
                    <button className="p-2 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700 duration-300"
                    onClick={() => onRemoveAppointment(appointment)} >
                        Eliminar
                    </button>
                </div>

            </article>
        </div>
    )
}

export default AppointmentItem;