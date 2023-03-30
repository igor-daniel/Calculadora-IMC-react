import React from 'react'
import { useState, useEffect } from 'react'
import './form.css'

export const Form = () => {
  const [name, setName] = useState("")
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const handleInput = (e) => {
    setName(e.target.value);
  }
  const handlePeso = (e) => {
    setPeso(e.target.value)
  }
  const handleAltura = (e) => {

    setAltura(e.target.value)
  }
  // const handleClick = (peso, altura) => {
  //   var imc = peso / (altura * altura)
  //   return imc.toFixed(1);

  //   // document.querySelector('.resultadoImc').innerHTML = imc;
  // }

  return (
    <div className='form'>
      <div className='inputs'>
        <label htmlFor="name">
          Seu nome:
          <input id='nome' type="text" onChange={handleInput} value={name} placeholder='EX: João' />
        </label>
        <label htmlFor="peso">
          Seu peso:
          <input type="number" onChange={handlePeso} value={peso} placeholder="Ex: 84,5" />
        </label>
        <label htmlFor="altura">
          Digite sua altura:
          <input type="number" onChange={handleAltura} value={altura} placeholder="Ex: 1.85" />
        </label>



      </div>
      <div className='resultado'>
        <h2>Preencha os capos e saiba como está seu IMC</h2>
        {/* <button onClick={handleClick(peso, altura)}>Resuldado</button> */}
        <p className='resultado-texto'>
          {name} com {peso} kilos e {altura} de altura. Seu Indice de Massa Corporal é:
        </p>
        <p className='resultadoImc'>
          {(peso / (altura * altura)).toFixed(1)}
        </p>
      </div>
    </div>
  )
}
