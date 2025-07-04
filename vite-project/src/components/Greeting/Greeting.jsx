// import { useState } from 'react'

// const Greeting = (props) => {
//   // const [name, setName] = useState(props.name)
//   // componentDidMount() {
//   //  setTimeout(() => {
//   //    setName('Alfonsina')
//   //   }, 3000)
//   // }
//   return <p>Hola {props.name}</p>
// }

// export default Greeting 


import React from 'react'
export default class Greeting extends React.Component {
  constructor(props) {
    super()
    this.state = { name: props.name }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: 'Alfonsina' })
    }, 3000)
  }
  render() {
    return <p>Hola {this.state.name}</p>
  }
}