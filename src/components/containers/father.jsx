import { useState } from "react";
import Child from "../pure/child";


const Father = () => {

    const [name, setName] = useState('Martin')

    const showMessage = (text) =>{
        alert(`Message received: ${text}`)
    }

    const updateName = (newName) => {
        setName(newName)
    }

    return(
        <div style={{background: 'tomato', padding: '20px'}}>
            <Child name={name} send={showMessage} update={updateName}/>
        </div>
    )
}

export default Father;