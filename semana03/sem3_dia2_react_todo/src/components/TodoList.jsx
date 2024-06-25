import React from 'react'

const TodoList = ({todo=[], onCompleted, onRemoveTodo}) => {
    return (
        <section className='mt-8'>
            <ul className='flex flex-col gap-2'>
                {
                    todo.map(t=>{
                    <TodoList/>
                    return (
                        <li className='flex gap-2' key={t.id}>
                        <input type="checkbox" className='w-4'
                        data-id={t.id} // esto es un atributo data-<NAME DE ACCESO>
                        onChange={onCompleted}
                        checked = {t.completed}
                        />
                        <div className='flex justify-between w-full items-center'>
                            <span className={t.completed ? 'line-through' : ''}>{t.title}</span>
                            <button className='bg-red-200 p-2 rounded-md hover:bg-red-700 
                            duration-300 px-2 py-1 text-white'
                            data-id={t.id} // esto es un atributo data-<NAME DE ACCESO>
                            onClick={onRemoveTodo}>
                            ❌
                            </button>
                            </div>
                        </li>
                    )
                    })
                }
                
            </ul>
        </section>
    )
}

export default TodoList;