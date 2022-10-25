

import React, { useState } from 'react'
import ComponentB from '../pure/componentB'

const ComponentA = () => {

    const [name, setName] = useState('Nicolas')

  const showMessage = (text) => {
    alert(`Message recevied: ${text}`)
  }

  const updateName = (newName) => {
    setName(newName)
  }

  return (
    <div>
        <ComponentB name={name} send={showMessage} update={updateName}/>
    </div>
  )
}

export default ComponentA