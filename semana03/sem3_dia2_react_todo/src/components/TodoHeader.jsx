import React from 'react'

const TodoHeader = ({title}) => {
    return (
        <h1 className="text-2xl font-bold text-center">{title}</h1>
    )
}

// const TodoHeader = (props) => {
//     return (
//         <h1 className="text-2xl font-bold text-center">{props.title}</h1>
//     )
// }

export default TodoHeader;