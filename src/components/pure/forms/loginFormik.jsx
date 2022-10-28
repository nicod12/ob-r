import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';




const LoginFormik = () => {

  const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                  .email('Invalid email format')
                  .required('Email is requiered'),
        password: Yup.string()
                     .required('Password is required')         
    }
  );   

  const initialCredential = {
    email: '',
    password: ''
  }

  const navigate = useNavigate();

  const registerTo = () =>{
    navigate('/register');
  }

  return (
        <div>
            <h4>Login Formik</h4>
            <Formik
              // *** Initial values that the form will take  
              initialValues={ initialCredential }

              // *** Yup Validation Schema 
              validationSchema = { loginSchema }

              //*** onSubmit Event
              onSubmit={async (values) => {
                 await new Promise((r) => setTimeout(r, 1000))
                 alert(JSON.stringify(values,null, 2))
                 //We save the data in the localstorage
                 localStorage.setItem('credentials', values)    
              }}
            >
                {/* We obtain props  from Formik */}

                {({values,
                   touched,
                   errors,
                   isSubmitting,
                   handleChange,
                   handleBlur}) =>(
                    <Form>
                            <label htmlFor="email">Email</label>  
                            <Field 
                                id='email' 
                                name='email' 
                                type='email' 
                                placeholder='example@email.com' 
                            />
                            
                                {/* Email Errors */}
                            {
                                errors.email && touched.email && 
                                 (
                                    // <div className='error'>
                                    //     <p>{errors.email}</p>
                                    // </div>
                                        <ErrorMessage name='email' component='div' />
                                 )
                            }
        
                            <label htmlFor="password">Password</label>  
                            <Field 
                                id='password' 
                                name='password' 
                                type='password' 
                                placeholder='password' 
                            />

                                {/* Password Errors */}
                            {
                                errors.password && touched.password && 
                                 (
                                    // <div className='error'>
                                    //     <p>{errors.password}</p>
                                    // </div>
                                        <ErrorMessage name='password' component='div' />
                                 )
                            } 


                            <button type='submit'>Login</button> 

                            {isSubmitting ? (<p>Login your credentials</p>) : null}
                            <button onClick={registerTo}>Register</button>
                    </Form> 
                )}
            </Formik>
        </div>
  )
}

export default LoginFormik
