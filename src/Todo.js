import React from 'react'
import { useState } from 'react';
import './Todo.css'



function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

function generateId() {
  return Math.floor(Math.random() * 100)
}

const handleSubmit = () => {
  setTodos((todos)=>
  todos.concat({
    text:input,
    id:generateId()
  })
  )
 
    setInput("");
  
}
const removeTodo = (id)=>{
  setTodos((todos)=>todos.filter((t)=>t.id !== id));
}

  return (
    <div className='container'>
        <h1 className='number'>Add Items Below</h1>
        <div className="todo">
        <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='New Todo' 
        />
      <button onClick={handleSubmit}>Submit</button>
        </div>
        <ul className="todos-list">
          {
            todos.map(({text, id})=>{
              return <li key={id} className='todo'>
                <span>{text}</span>
                <button className='close' onClick={()=>removeTodo(id)}>X</button>
              </li>;
            })}
        </ul>

    </div>
  )
}

export default Todo