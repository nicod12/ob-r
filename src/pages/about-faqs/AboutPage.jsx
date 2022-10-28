import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AboutPage = () => {

   const location = useLocation();
   console.log('we are in route: ', location.pathname); 

   let navigate = useNavigate();

   console.log(navigate)

  return (
    <div>
      <h1>
        About | FAQs Page
      </h1>
      <div>
        <button onClick={() => navigate('/')}>
            Go To Home
        </button>
        <button>
            Go Back
        </button>
      </div>
    </div>
  )
}

export default AboutPage;
