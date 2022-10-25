import React, { useRef } from 'react'

const ComponentB = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('')

  const pressButton = () => {
    const text = messageRef.current.value;
    alert(`Text: ${text}`);
  }

  const pressButtonParams = (text) => {
    alert(`Text: ${text}`)
  }

  const submitName = (e) => {
      e.preventDefault();
      update(nameRef.current.value);
  }

  return (
    <div>
      <p onMouseOver={() => console.log('On Mouse Over')}>Hello: { name } </p>
      <button onClick={() => console.log('Pressed Clicked')}>Button 1</button>
      <button onClick={pressButton}>Button 2</button>
      <button onClick={() => pressButtonParams('Button 3')}>Button 3</button>
      <input
        placeholder='Insert Message'
        onChange={(e) => console.log('Input text: ', e.target.value)}
        onFocus={() => console.log('Focus Input')}
        onCopy={() => console.log('Text Copied')}
        ref={messageRef}
      />
      <button onClick={() => send(messageRef.current.value)}>
        Send Message
      </button>

      <div style={{marginTop: '20px'}}>
            <form onSubmit={submitName}>
                <input 
                    type="text"
                    placeholder='New Name'
                    ref={nameRef}
                 />  
                <button type='submit'>
                    Update Name
                </button>
            </form>
      </div>
    </div>
  )
}

export default ComponentB;
