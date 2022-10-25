import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';


const initialValues = {
    name: '',
    description: '',
    completed: false,
    level: LEVELS.NORMAL
}



const registerSchema = Yup.object().shape(
    {
        name: Yup.string()
            .required('Task name is required')
            .min(3,'min too short'),


        description: Yup.string()
                .required('Task description is required')
                .min('6', 'min too short'),

        level: Yup.string()
            .required('Is required')           
    }
  )  

const TaskFormik = () => {
  return (
    <div>
        <Formik
        initialValues={initialValues}
        schemaValidation={registerSchema}

        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000))
            alert(JSON.stringify(values,null, 2))
            //We save the data in the localstorage
            localStorage.setItem('tasks', values)    
         }}
        >
            {({values,
                   touched,
                   errors,
                   isSubmitting,
                   handleChange,
                   handleBlur}) =>(
                    <Form>

                            <Field
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Task name ....'
                            />

                            {
                                errors.name && touched.name && (
                                    <ErrorMessage name='name' component='div'/>
                                )
                            }
                            <Field
                                type='text'
                                id='description'
                                name='description'
                                placeholder='Description ....'
                            />

                            {
                                errors.description && touched.description && (
                                    <ErrorMessage name='description' component='div' />
                                )
                            }

                            <Field as="select" name="level">

                                <option value="normal">Normal</option>

                                <option value="urgent">Urgent</option>

                                <option value="blocking">Blocking</option>

                            </Field>

                            {
                                errors.level && errors.touched && (
                                    <ErrorMessage name='level' component='div' />
                                )
                            }

                        <button type='submit'>Add Task</button>
                    </Form>
                   )}
            
        </Formik>
      
    </div>
  )
}

export default TaskFormik

