
/**
 * Ejemplo Hooks:
 *  - useState()
 *  - useContext()
 */
import React, { useState, useContext } from 'react'

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * Que recibe desde el padre
 */

//Va a rellenarse con los datos del padre
const miContexto = React.createContext(null);

const Componente1 = () => {
    
    
    const state = useContext(miContexto);
    return(
        <div>
            <h1>
                El Token es: { state.token }
            </h1>
            {/* Pintamos componente2 */}
            <Componente2 />
        </div>
    )
}

const Componente2 = () => {

    const state = useContext(miContexto);
    return(
        <div>
            <h2>
                La sesion es: { state.sesion }
            </h2>
        </div>
    )
}

    const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: '12345',
        sesion: 1
    }

     // Creamos el estado del componente
     const [sessionData, setSessionData] = useState(estadoInicial);

     const actualizarSesion = () => {
        setSessionData(
            {
                token: Math.random(),
                sesion: sessionData.sesion +  1
            }
        )
     }

    return(
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que esta aqui adentro puede leer los datos de sessiondata */}
            <Componente1 />
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    )
}


export default MiComponenteConContexto