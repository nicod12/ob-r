import './App.css'
import Ejemplo1 from "./hooks/Ejemplo1"
import Ejemplo2 from "./hooks/Ejemplo2"
import MiComponenteConContexto from "./hooks/Ejemplo3"
import Ejemplo4 from "./hooks/Ejemplo4"
import TaskListComponent from "./components/containers/task_list"
import GreetingStyled from "./components/pure/greetingStyled"
import ComponentA from "./components/containers/componentA"
import OptionarRender from "./components/pure/optionalRender"
import BackgroundRandom from './components/containers/backgroundRandom'
import LoginFormik from './components/pure/forms/loginFormik'
import RegisterFormik from './components/pure/forms/registerFormik'
import TaskFormik from './components/pure/forms/taskFormik'







const App =() => {
  return (
    <>
      {/*Componente de Listado de Tareas  */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteConContexto /> */}
        {/* <Ejemplo4 nombre="Nicolas">
          <h3>Contenido del children</h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name= 'Nicolas' /> */}
        {/* Gestion de eventos */}
        {/* <ComponentA /> */}
      {/* <OptionarRender /> */}
        {/* <BackgroundRandom /> */}
        {/* <TaskListComponent /> */}
        {/* <LoginFormik /> */}
        {/* <RegisterFormik /> */}
        <TaskFormik />
    </>
  )
}

export default App
