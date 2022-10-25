import React, { useRef } from 'react'


const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('')

    const pressButton = () => {
        const text = messageRef.current.value;
        alert(`Text in Input ${text}`)
    }

    const pressButtonParams = (text) => {
        alert(`Text: ${text}`)
    }

    const submitName = (e) => {
        e.preventDefault();
        update(nameRef.current.value)
    }


    return(
        <div style={{background: 'cyan', padding: '20px'}}>
            <p onMouseOver={() => console.log('On Mouse Over')}>Hello: {name}</p>
            <button onClick={()=> console.log('Pressed Button 1')}>
                Button 1
            </button>
            <button onClick={pressButton}>
                Button 2
            </button>
            <button onClick={() => pressButtonParams('hello')}>
                Button 3
            </button>
            <input 
                placeholder="Send a text to your father" 
                onFocus={() => console.log('Input Focus')} 
                onChange={(e) => console.log('Input Change', e.target.value)}
                onCopy={() => console.log('Copied text from Input')}
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>

            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input 
                        placeholder='New Name' 
                        ref={nameRef}
                    />
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    )
}

export default Child;