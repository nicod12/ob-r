import React, { useState } from 'react';

//Definiendo estilos en constantes
const loggedStyle = {
    color: 'blue'
};

// ? estilo para usuario no logeado
const unloggedStyle = {
    color: 'tomato',
    fontWieght: 'bold'
};



const GreetingStyled = (props) => {

    //Generamos un estado para el componente
    // y asi controlar si el usuario esta o no esta logeado

    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, {props.name}</p>);
    const pleaseLogin = () => (<p>Please login</p>)


  return (
    <div style={ logged ? loggedStyle : unloggedStyle}>
        { logged ?
            greetingUser()
            : 
            pleaseLogin()
        }
        
        <button onClick={() => {
            console.log('Boton pulsado');
            setLogged(!logged);
        }}>
            { logged ? 'Logout' : 'Login'}
        </button>
    </div>
  )
}

export default GreetingStyled;