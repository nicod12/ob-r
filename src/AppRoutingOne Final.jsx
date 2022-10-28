import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import  NotFoundPage from './pages/404/NotFoundPage'
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoardPage';
import TasksPage from './pages/tasks/TasksPage';


const AppRoutingOneFinal =() => {
  //TODO: change to value from sessionStorage (or something dinamic)
  let loggedIn = true;

  

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirections to protect our routes */}
        <Route exact path='/' element={loggedIn ? (<Navigate to='/dashboard' />) : (<LoginPage />)}/>;

        {/* <Route path="/login" element={ usuario.logged ? (<Navigate to="/"/>): (<LoginScreen />) }/> */}

        {/* Login Route */}
        <Route exact path='/login' element={ <LoginPage /> } />
        {/* Dashboard Route */}
        <Route exact path='/dashboard' element={          
            loggedIn ?
            (<DashBoardPage />)
            :
            <Navigate to="/login" />
          }/>
        <Route path='/taskspage' element={loggedIn ? (<TasksPage />) : <Navigate  to='/login' />} />
        <Route path='*' element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutingOneFinal
