import React from 'react'
import ReactDOM from 'react-dom/client'
// Agregamos boostrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// ! Los estilos propios deben ir debajo del de boostrap para que no los pise
import App from './App'
import './Index.css'
import AppTwo from './AppTwo';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTwo />
  </React.StrictMode>
)
