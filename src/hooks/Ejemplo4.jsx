
/**
 * Ejemplo para entender el uso de props.children
 */

const Ejemplo4 = (props) => {
    return(
        <div>
            <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
            <h2>
                Nombre: { props.nombre }
            </h2>
            {/* props.children pintara por defecto aquello que se encuentre dentro de las
                etiqetas de este componente
            */}
             {props.children}
        </div>
    )
}

export default Ejemplo4;