import React from 'react'
import { useState } from 'react';
import './Counter.css'



function Counter() {
    const [count, setCount] = useState(0);

const increment = () => setCount(count + 1)
const decrement = () => setCount(count - 1)

  return (
    <div className='container'>
        <h1 className='number'>{count}</h1>
<div className="buttons">
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
</div>
    </div>
  )
}

export default Counter