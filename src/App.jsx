import { useState } from 'react'
import { Form } from './components/Form'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Caculadora de IMC</h1>
      <Form />
      <Footer />
    </div>
  )
}

export default App
