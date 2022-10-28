import React from 'react'
import Button from '@mui/material/Button';
import CopyRight from '../../components/pure/CopyRight';
import { useNavigate } from 'react-router-dom'


const DashBoardPage = () => {

const navigate = useNavigate();
  const logout = () => {
    navigate('/login')
  }

  return (
    <div>
      <Button onClick={() => navigate('/taskspage')}>Go to task</Button>
      <Button variant="contained" onClick={logout}>Logout</Button>
       <CopyRight />
    </div>
  )
}

export default DashBoardPage;
