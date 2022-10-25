import React, { useState, useRef, useEffect } from 'react'

const Ejemplo2 = () => {
 
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] =useState(0)

  //Vamos a crear una referencia con useRef() para asociar una variable
  // Con un elemento del DOM del componente (vista HTML)

  const miRef = useRef();

  const incrementar1 = () => {
    setContador1(contador1 + 1);
  }
  const incrementar2 = () => {
    setContador2(contador2 + 1);
  }

  /**
   * useEffect
   */
  
  /**
   * ?Caso 1: Ejecutar siempre un snippet de codigo
   * Cada vez que haya un cambio en el estado del componente
   * Se ejecuta aquello que este dentro del useEffect
   */

    //   useEffect(() =>{
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando Referencia al elemento del DOM:');
    //     console.log(miRef);
    //   })

 
    /**
     * ? Caso 2: Ejecutar solo cuando cambie contador 1
     * Cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect
     * En caso de que cambie contador2 no habra ejecucion
     */

    // useEffect(()=>{
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
    //     console.log('Mostrando Referencia al elemento del DOM:');
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * ? Caso 2: Ejecutar solo cuando cambie CONTADOR1 o CONTADOR2
     * Cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect
     * Cada vez que haya un cambio en contador2, se ejecuta lo que diga el useEffect
     */

    useEffect(()=>{
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR1 O CONTADOR2');
        console.log('Mostrando Referencia al elemento del DOM:');
        console.log(miRef);
    }, [contador1,contador2]);

  return (
    <div>
        <h1>*** Ejemplo useState(), useRef(), useEffect() ***</h1>
        <h2>CONTADOR 1: { contador1 }</h2>
        <h2>CONTADOR 2: { contador2 }</h2>
        {/*  Elemento referenciado */}
        <h4 ref={miRef}>
            Ejemplo de elemento referenciado
        </h4>
        {/* Botones para cambiar contadores */}
        <div>
            <button onClick={incrementar1}>
                Incrementar Contador 1
            </button>
            <button onClick={incrementar2}>
                Incrementar Contador 2
            </button>
        </div>
    </div>
  )
}

export default Ejemplo2
