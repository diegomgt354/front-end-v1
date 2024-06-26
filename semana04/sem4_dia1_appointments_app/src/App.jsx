import React, { useState } from 'react'
import AppointmentsForm from './components/appointments/AppointmentsForm';
import AppointmentsList from './components/appointments/AppointmentsList';
import AppointmentsHeader from './components/appointments/AppointmentsHeader';
import AppointmentListJson from './components/appointments/AppointmentListJson';

const App = () => {

  const INITIAL_APPOINTMENT = {
    id: 'id_inicial',
    petName: 'Rabiosa',
    petAge: '3',
    ownerName: 'Diego',
    appointmentDate: '2024-06-19',
    appointmentTime: '19:52',
    sysmptoms: 'Duerme mucho',
    confirmed: false
  }

  const [appointments, setAppointments] = useState([INITIAL_APPOINTMENT]);
  const [currentAppointment, setCurrentAppointment] = useState([]);


  const handleConfirmAppointment = (appointment) => {
    const {id} = appointment;

    const appointmentFoundIndex = appointments.findIndex((a) => a.id == id);
    const newAppointments = [...appointments]

    newAppointments[appointmentFoundIndex].confirmed = appointment.confirmed ? false : true;

    setAppointments(newAppointments);
  }

  // TODO: Crear/Editar una nueva cita
  const handleSaveAppointment = (appointment, isNew) => {
    if(isNew){
      // crear una nueva cita
      setAppointments([...appointments, appointment]);
    }else{
      // actualizar la cita
      const {id} = appointment;
      const appointmentFoundIndex = appointments.findIndex((a) => a.id == id);
      const newAppointments = [...appointments]
      newAppointments[appointmentFoundIndex] = appointment

      setAppointments(newAppointments);
    }
    
    // limpiamos el formulario con los datos jalados
    setCurrentAppointment([]); 
    
  }

  // TOOD: Eliminar la cita
  const handleRemoveAppointment = (appointment) => {

    const {id} = appointment;

    const newAppointment = appointments.filter((a) => a.id !== id);
    setAppointments(newAppointment);

  }

  // TODO: Jalar la cita que se va a editar
  const handleEditAppointment = (appointment) => {
    setCurrentAppointment(appointment);
    console.log('edicion del paciente', appointment);
  }

  return (
    <>
      <AppointmentsHeader title='Citas Medicas para Mascotas'/>
      
      <main className='container m-auto flex flex-wrap gap-12 py-5'>

        {/* <div> */}

          <AppointmentsForm
            onSaveAppointment={handleSaveAppointment}
            appointment = {currentAppointment}
          />

        {/* </div> */}

        {/* <div className='flex gap-12 border border-cyan-500 rounded-md p-3'> */}
  
          <AppointmentsList
            appointments = {appointments}
            onConfirmAppointment = {handleConfirmAppointment}
            onRemoveAppointment = {handleRemoveAppointment}
            onEditAppointment = {handleEditAppointment}
          />

          <AppointmentListJson 
            appTitle = 'JSON Citas'
            appointments = {appointments} 
          />

        {/* </div> */}

      </main>
    </>
  )
}

export default App;
