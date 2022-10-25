import React, { useState } from 'react'

const Ejemplo1 = () => {

    const valorInicial = 0;

    const personaInicial = {
        nombre: 'pepe',
        email: 'pepe@gmail.com'
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial)

    const incrementarValor = () => {
        setContador(contador + 1);
    }

    const actualizarPersona = () => {
        setPersona(
            {
                nombre: 'david',
                email: 'david@gmail.com'
            }
        )
    }

    const { nombre, email } = persona;

  return (
    <>
        <h1>*** USE STATE ***</h1>
        <h2>Contador: { contador }</h2>
        <h2>Actualizar Persona</h2>
        <h3>
            Nombre: { nombre }
        </h3>
        <p>
            Email: { email }
        </p>
        <button onClick={incrementarValor} style={{ marginRight: '2rem' }}>
            Aumentar
        </button>
        <button onClick={actualizarPersona}>
            Actualizar Persona
        </button>
    </>
  )
}

export default Ejemplo1
