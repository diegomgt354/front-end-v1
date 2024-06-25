import React, { useState } from 'react'
import AppointmentsForm from './components/appointments/AppointmentsForm';
import AppointmentsList from './components/appointments/AppointmentsList';


const App = () => {

  const INITIAL_APPOINTMENT = {
    id: 1,
    petName: '',
    petAge: '',
    ownerName: '',
    appointmentDate: '',
    appointmentTime: '',
    sysmptoms: ''
  }

  const [appointments, setAppointments] = useState([INITIAL_APPOINTMENT]);


  return (
    <>
      <AppointmentsForm/>

      <AppointmentsList/>

      

    </>
  )
}

export default App;
