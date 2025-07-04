// import React from 'react'
import { useState } from 'react'
// import React, { useState } from 'react'
import './Counter.css'

const Counter = (props) => {
  const [counter, setCounter] = useState(props.initialValue)
  const decrement = () => setCounter(counter - props.step)
  const increment = () => setCounter(counter + props.step)
  return(
    <div className='flex-container'>
      <button onClick={decrement}>-</button>
      <h3>Counter: {counter}</h3>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter
