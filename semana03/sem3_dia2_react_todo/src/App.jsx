import { useState } from 'react'
import './App.css'
import TodoStats from './components/TodoStats';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoHeader from './components/TodoHeader';
import TodoNotStats from './components/TodoNotStats';
import TodoDataJson from './components/TodoDataJson';

const App = () => {


  const DEFAULT_TODO = [
    {
      id: '1',
      title: 'Aprendiendo Javascript',
      completed: true
    },
    {
      id: '2',
      title: 'Aprendiendo React',
      completed: false
    },
    {
      id: '3',
      title: 'Aprendiendo Angular',
      completed: false
    }
  ]

  const [todo, setTodo] = useState(DEFAULT_TODO);
  

  // capturamos el submit
  const handleSubmit = (newTodo) => {
    if(newTodo.title.trim().length <= 0) return;
    setTodo([...todo, newTodo])
  }

  // removemos un todo
  const handleRemoveTodo = (event) => {

    const { id } = event.target.dataset; // data-id
    setTodo(todo.filter(t => t.id !== id));
  }

  // completamos un todo
  const handleCompleted = (event) => {
    const { id } = event.target.dataset; // data-id
    const checked = event.target.checked;
    setTodo(todo.map(t => t.id === id ? {...t, completed: checked} : t));
  }

  const handleClearCompleted = () => {
    setTodo(todo.filter(t => !t.completed));
  }

  return (
    <main className='bg-yellow-100 w-full max-w-md mx-auto mt-10 border border-yellow-500 
    rounded-lg shadow-lg shadow-yellow-500 p-4'>

      <TodoHeader title='Todo App'/>

      {/* {JSON.stringify(todo)} */}
      <TodoForm onHandleSubmit={handleSubmit} />

      {
        todo.length > 0 ? 
        ( <TodoStats todo = {todo} onclearCompleted = {handleClearCompleted} /> )
        : 
        ( <TodoNotStats/> )
      }

      <TodoList todo={todo} onCompleted={handleCompleted} onRemoveTodo={handleRemoveTodo} />
      
      <TodoDataJson json = {JSON.stringify(todo, null, 2)}/>

    </main>

  )
}


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
