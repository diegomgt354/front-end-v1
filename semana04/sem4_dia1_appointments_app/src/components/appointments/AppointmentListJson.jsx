import React from 'react'

const AppointmentListJson = ({ appTitle, appointments }) => {
    return (
        <section>
            <h1 className="text-2xl text-center">{appTitle}</h1>
            <div className='text-left w-full bg-blue-100 border my-3 p-3 border-blue-500 rounded-md'>
                <pre className="w-full overflow-auto whitespace-pre-wrap">{JSON.stringify(appointments, null, 2)}</pre>
            </div>
        </section>
    )
}

export default AppointmentListJson;
