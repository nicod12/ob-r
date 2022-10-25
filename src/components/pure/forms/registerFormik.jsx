import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Models
import { User } from '../../../models/user.class'
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    role: ROLES.USER
  }

  const registerSchema = Yup.object().shape(
    {
        username: Yup.string()
            .min(6,'Username too short')
            .max(12,'User name too long')
            .required('Username is required'),

        email: Yup.string()
            .email('Invalid email format')   
            .required('Email is required'),

        role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
            .required('Role is required'),    

        password: Yup.string()
            .min(8, 'Password too short')
            .required('Password is required'),

        confirm: Yup.string()
            .when('password', {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref('password')],
                    'Password must match!'
                )
            })
            .required('You must confirm the password')

    }   
  )  

  let user = new User();

  const submit = (values) => {
    alert('Register user')
  }

  return (
    <div>
        <h4>Register Formik</h4>

        <Formik
            initialValues={ initialValues }

            // *** Yup Validation Schema 
            validationSchema = { registerSchema }

            //*** onSubmit Event
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 1000))
              alert(JSON.stringify(values,null, 2))  
            }}
        >
            {({values,
                   touched,
                   errors,
                   isSubmitting,
                   handleChange,
                   handleBlur}) =>(
                    <Form>
                            <label htmlFor="username">Username</label>  
                            <Field 
                                id='username' 
                                name='username' 
                                type='text' 
                                placeholder='username' 
                            />
                                 
                                {/* Username Errors */}
                            {
                                errors.username && touched.username && 
                                 (
                                    <ErrorMessage name='username' component='div' />
                                 )
                            }
        
                            <label htmlFor="email">Email</label>  
                            <Field 
                                id='email' 
                                name='email' 
                                type='email' 
                                placeholder='example@gmail.com' 
                            />
                                {/* Email Errors */}
                            {
                                errors.email && touched.email && 
                                 (
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
                                    <ErrorMessage name='password' component='div' />
                                 )
                            }

                            
                            <label htmlFor="confirm">Password</label>  
                            <Field 
                                id='confirm' 
                                name='confirm' 
                                type='password' 
                                placeholder='confirm password' 
                            />
                                {/* Confirm  Password Errors */}
                            {
                                errors.confirm && touched.confirm && 
                                 (
                                    <ErrorMessage name='confirm' component='div' />
                                 )
                            }                       

                            <button type='submit'>Register Account</button> 

                            {isSubmitting ? (<p>Sending your credentials</p>) : null}
                    </Form>
                   )}

        </Formik>
    </div>
  )
}

export default RegisterFormik