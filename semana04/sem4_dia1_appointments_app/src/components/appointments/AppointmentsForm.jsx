import React, { useEffect, useState } from 'react'
import AppointmentInputForm from './AppointmentInputForm';
import AppointmentTextAreaForm from './AppointmentTextAreaForm';
import AppointmentListJson from './AppointmentListJson';

const AppointmentsForm = ({ onSaveAppointment, appointment })=> {

    const INITIAL_FORM_STATE = {
        id: '',
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
        console.log('appointment', appointment);
        if(appointment.id) {
            setForm(appointment);
        }
    }, [appointment]);
// }, [appointment,setForm]);

    // manejo de evento para el envio del formulario
    const handleSubmit = (event) => {
        event.preventDefault(); // para que no se actualize la pagina
        console.log('appointment al inicio', appointment);
        if(appointment.id){
            // logica para editar una cita
            console.log('editar');
            onSaveAppointment(form, false);
        } else {
            // logica para crear una nueva cita
            console.log('guardar');
            const newAppointment = {
                ...form,
                id: crypto.randomUUID(),
            };

            onSaveAppointment(newAppointment, true);
            
        }
        
        setForm(INITIAL_FORM_STATE);
        // appointment.id = null;

        console.log('appointment al final', appointment);
    }

    // manejo de los campos en el formulario
    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    return (
        <section className='w-96 p-4 border rounded-md'>



            <h2 className='text-4xl text-center mb-4'>
                {appointment.id ? ('Editar paciente') : ('Nuevo paciente')}</h2>

            <form className='w-full flex flex-col gap-5 mb-3' onSubmit={handleSubmit}>

                    <AppointmentInputForm
                        type='text'
                        name='petName'
                        placeholder='Nombre de la mascota'
                        value={form.petName}
                        handleChangeAppointment={handleChange}
                    />
                    
                    <AppointmentInputForm
                        type='number'
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

            <AppointmentListJson 
                appTitle = 'JSON Formulario'
                appointments = {form} 
            />
        
        </section>
    )
}

export default AppointmentsForm;