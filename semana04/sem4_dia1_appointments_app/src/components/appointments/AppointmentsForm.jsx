import React, { useEffect, useState } from 'react'
import AppointmentInputForm from './AppointmentInputForm';
import AppointmentTextAreaForm from './AppointmentTextAreaForm';

const AppointmentsForm = ({ onSaveAppointment, appointment })=> {

    const INITIAL_FORM_STATE = {
        petName: '',
        petAge: '',
        ownerName: '',
        appointmentDate: '',
        appointmentTime: '',
        sysmptoms: '',
        confirmed: false
    }

    const [form, setForm] = useState(INITIAL_FORM_STATE);

    // nos ayuda a controlar el ciclo de vida
    useEffect(() => {
        if(appointment.id) {
            setForm(appointment);
            // appointment.id = null;
        }
    }, [appointment]);
// }, [appointment,setForm]);

    // manejo de evento para el envio del formulario
    const handleSubmit = (event) => {
        event.preventDefault(); // para que no se actualize la pagina
        if(appointment.id){
            // logica para editar una cita
            onSaveAppointment(form, false);
        } else {
            // logica para crear una nueva cita
            const newAppointment = {
                ...form,
                id: crypto.randomUUID(),
            };

            onSaveAppointment(newAppointment, true);
        }

        setForm(INITIAL_FORM_STATE);
        appointment.id = null;
    }

    // manejo de los campos en el formulario
    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    return (
        <section className='w-96 p-4 border rounded-md'>
            <h2 className='text-4x1 text-center mb-4'>Nuevo paciente</h2>

            <form className='w-full flex flex-col gap-5' onSubmit={handleSubmit}>

                    <AppointmentInputForm
                        type='text'
                        name='petName'
                        placeholder='Nombre de la mascota'
                        value={form.petName}
                        handleChangeAppointment={handleChange}
                    />
                    
                    <AppointmentInputForm
                        type='text'
                        name='petAge'
                        placeholder='Edad de la mascota'
                        value={form.petAge}
                        handleChangeAppointment={handleChange}
                    />
                    
                    <AppointmentInputForm
                        type='text'
                        name='ownerName'
                        placeholder='Nombre del dueño'
                        value={form.ownerName}
                        handleChangeAppointment={handleChange}
                    />

                    <AppointmentInputForm
                        type='date'
                        name='appointmentDate'
                        placeholder='Fecha de la cita'
                        value={form.appointmentDate}
                        handleChangeAppointment={handleChange}
                    />

                    <AppointmentInputForm
                        type='time'
                        name='appointmentTime'
                        placeholder='Hora de la cita'
                        value={form.appointmentTime}
                        handleChangeAppointment={handleChange}
                    />

                    <AppointmentTextAreaForm
                        name='sysmptoms'
                        placeholder='Sintomas'
                        value={form.sysmptoms}
                        handleChangeAppointment={handleChange}
                    />

                    <input type="submit" value="Guardar cita" 
                    className='p-3 bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-700 duration-300'/>


            </form>

            <h1 className="text-2xl text-center mt-10">JSON</h1>
            <div className='text-left w-full bg-blue-100 border my-3 p-3 border-blue-500 rounded-md'>
                <pre className="w-full overflow-auto whitespace-pre-wrap">{JSON.stringify(form, null, 2)}</pre>
            </div>
        
        </section>
    )
}

export default AppointmentsForm;