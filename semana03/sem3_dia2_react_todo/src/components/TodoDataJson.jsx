import React from 'react'

const TodoDataJson = ({json}) =>{
    return (
        <>
        <h1 className="text-2xl font-bold text-center mt-10">JSON</h1>
        <section className='text-left w-full bg-blue-100 border my-3 p-3 border-blue-500 rounded-md'>
            <pre className="w-full overflow-auto whitespace-pre-wrap">{json}</pre>
        </section>
        </>
    )
}

export default TodoDataJson;

