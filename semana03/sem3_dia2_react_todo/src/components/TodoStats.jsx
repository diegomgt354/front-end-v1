import React from 'react'

const TodoStats = ({todo, onclearCompleted}) => {

    const completed = todo.filter(t => t.completed);
    const total = todo.length;

    return (
        <section className='flex justify-between items-center'>
            <span className='font-bold'>
                {`${completed.length} de ${total} completadas`}
            </span>
            <button className='bg-blue-500 p-2 rounded-md hover:bg-blue-700 duration-300
            px-2 py-1 text-white'
            onClick={onclearCompleted}>
                Limpiar tareas completas
                </button>
        </section>
    )
}

export default TodoStats;