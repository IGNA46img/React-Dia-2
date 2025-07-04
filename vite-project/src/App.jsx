//  import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter/Counter'
import Greeting from './components/Greeting/Greeting'


// Crea un componente Counter (funcional) que contenga:
// botón de decremento
// contador
// botón de incremento

// const Counter = (props) => {
//   const [counter, setCounter] = useState(props.initialValue)
//   const decrement = () => setCounter(counter - 1)
//   const increment = () => setCounter(counter + 1)
//   return(
//     <div>
//       <button onClick={decrement}></button>
//       <h3>Counter: {counter}</h3>
//       <button onClick={increment}></button>
//     </div>
//   )
// }


function App() {
  // const [counter, setCounter] = useState(0) 

  return (
    <div className='App'>
      <Counter initialValue={4} step={2} />
      <Counter initialValue={9} step={3} />
      {/* <Counter initialValue={6}></Counter>
      <Counter initialValue={2}></Counter> */}
      <Greeting name='Euralio' />
    </div>
  )
}

export default App
