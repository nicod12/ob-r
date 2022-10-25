
/**
 * Ejemplo de componente de tipo clase dispone de los
 * metodos de cliclo de vida
 */



import React, { Component } from 'react'


class LifeCycleExample extends Component {

    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente');
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps){
        console.log('WillReceiveProps: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState){
        /**
         * Sirve para controlar si el componente debe o no actualizarse
         */
        //return true / false
    }

    componentWillUpdate(nextProps, nextState){
        console.log('WWillUpdate: Justo antes de actualizarse');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdate: Justo despues de actualizarse');
    }

    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer');
    }

    render() {
        return(
            <div>
                
            </div>
        )
    }
}