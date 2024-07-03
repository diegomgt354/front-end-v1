import React, { useState } from 'react'

const TodoForm = ({ onHandleSubmit }) => {

    const [input, setInput] = useState('');

    // capturamos lo que escribe el usuario en el input
    const handleChange = (event) => {
        setInput(event.target.value);
    }

    // capturamos el submit
    const handleSubmit = (event) => {
        event.preventDefault(); // evita que se produsca evento predeterminado como recargar la pagina

        const newTodo ={
            id: crypto.randomUUID(),
            title: input,
            completed: false
        }

        onHandleSubmit(newTodo);

        // limpiamos el input
        setInput('');
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <input className="w-full border my-3 p-3 border-yellow-500 rounded-md"
                type="text"
                placeholder="Que deseas hacer hoy?"
                require = "true"
                onChange={handleChange} 
                value={input}/>
        </form>
    )
}

export default TodoForm;