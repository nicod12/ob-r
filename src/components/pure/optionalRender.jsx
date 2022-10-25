
import React, {useState} from 'react'

const LogoutButton = ({ logoutAction }) => {
  return <button onClick={logoutAction}>Logout</button>
}

const LoginButton = ({ loginAction }) => {
  return <button onClick={loginAction}>Login</button>
}

// ? (expresion true) && expresion => se renderiza la expresion
// ? (expresion false) && expresion => no se renderiza la expresion

const OptionarRender = () => {

  const [access, setAccess] = useState(true);
  const [nMessage, setNMessage] = useState(0)

  const logoutAction = () =>{
    setAccess(false)
  }
  const loginAction = () =>{
    setAccess(true)
  }

  const addMessage = () =>{
    setNMessage(nMessage + 1)
  }


  let optionalButton;

  // const updateAccess = () =>{
  //   setAccess(!access);
  // }

  if(access){
    optionalButton = <LogoutButton logoutAction={logoutAction} />
  }else{
    optionalButton = <LoginButton loginAction={loginAction} />
  }

  return (
    <div>
      {/* Optional Button */}
        {optionalButton}
        {/* Ternay  Operator */}
        {
          nMessage > 0 ? <p>You have {nMessage} new message{nMessage > 1 ? 's' : null}</p>
          :
          <p>There are no new messages</p>
        }
        <button onClick={addMessage}>{nMessage === 0 ? 'Add your fist message' : 'Add new Message'}</button>
    </div>
  )
}

export default OptionarRender;