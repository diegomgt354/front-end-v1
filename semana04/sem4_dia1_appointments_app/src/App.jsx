import React, { useState } from 'react'
import AppointmentsForm from './components/appointments/AppointmentsForm';
import AppointmentsList from './components/appointments/AppointmentsList';
import AppointmentsHeader from './components/appointments/AppointmentsHeader';


const App = () => {

  const INITIAL_APPOINTMENT = {
    id: 1,
    petName: 'Rabiosa',
    petAge: '3',
    ownerName: 'Diego',
    appointmentDate: '',
    appointmentTime: '',
    sysmptoms: 'Duerme mucho',
  }

  const [appointments, setAppointments] = useState([INITIAL_APPOINTMENT]);
  const [currentAppointment, setCurrentAppointment] = useState([]);

  const handleSaveAppointment = (appointment, isNew) => {
    if(isNew){
      setAppointments([...appointments, appointment]);
    }else{
      // actualizar la cita
      const {id} = appointment;
      const appointmentFoundIndex = appointments.findIndex((a) => a.id === id);
      console.log('index: ', appointmentFoundIndex);
      const newAppointments = [...appointments].splice(appointmentFoundIndex, 1, appointment);
      console.log(newAppointments);
      setAppointments(newAppointments);
    }
    
  }

  // TOOD: Eliminar la cita
  const handleRemoveAppointment = (appointment) => {
    console.log(appointment.id);

    const {id} = appointment;

    const newAppointment = appointments.filter((a) => a.id !== id);
    setAppointments(newAppointment);

  }

  // TODO: Editar la cita
  const handleEditAppointment = (appointment) => {
    console.log(appointment);
    setCurrentAppointment(appointment);
  }

  return (
    <>

    <AppointmentsHeader title='Citas Medicas para Mascotas'/>
    
    <main className='container m-auto flex gap-12 py-5'>

      <AppointmentsForm
        onSaveAppointment={handleSaveAppointment}
        appointment = {currentAppointment}
      />

      {/* <pre>{JSON.stringify(appointments, null, 2)}</pre> */}

      <AppointmentsList
      appointments = {appointments}
      onRemoveAppointment = {handleRemoveAppointment}
      onEditAppointment = {handleEditAppointment}
      />

    </main>
    </>
  )
}

export default App;
