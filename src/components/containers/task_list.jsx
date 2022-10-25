import React, { useState, useEffect } from 'react'
import { LEVELS } from "../../models/levels.enum"
import { Task } from "../../models/task.class"
import TaskComponent from "../pure/task"

import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING)

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
    const [loading, setLoading] = useState(true)

    //Control del ciclo de vida del componente
    useEffect(() => {
      console.log('Task State has been modified');
      setTimeout(() => {
        setLoading(false)
      }, 2000);
      return () => {
        console.log('TaskList component is going to unmount');
      }
    }, [tasks])
    

    const completeTask = (task) => {
       console.log('Complete this task :', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;

       //We update the state of the component with the new list of task and it will update the
       // Iteration of the tasks in order to show the task updated

      setTasks(tempTask);
    }


    const removeTask = (task) =>{
      const index = tasks.indexOf(task);
      const tempTask = [...tasks];
      tempTask.splice(index,1);

      setTasks(tempTask);
    }

    const addTask = (task) => {
      const tempTask = [...tasks];
      tempTask.push(task);
      setTasks(tempTask);
    }

    const Table = () => {
      return(
        <table>
        <thead>
           <tr>

            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>

           </tr>
        </thead>
        <tbody>
          
          { tasks.map((task, index) =>{
              return (
                <TaskComponent 
                    key={index} 
                    task={task} 
                    complete={completeTask} 
                    remove={removeTask}
                  />
              )
            }
          )}

        </tbody>
      </table>
      )
    }

    let tasksTable ;

    if(tasks.length > 0) {
      tasksTable = <Table />
    } else {
      tasksTable = (
        <div>
          <h3>There are no tasks to show</h3>
          <h4>Please, create one</h4>
        </div>
      )
    }


    const loadingStyle = {
      color: 'gray',
      fontSize: '30px',
      fontWeight: 'bold'
    }

    return (
    <div>
        <div className='col-12'>
            <div className='card'>
              {/* Card header (title) */}
              <div className='card-header p-3'>
                  <h5 className='text-center'>
                    Your Task:
                  </h5>
              </div>
              {/* Card body (content) */}
              <div className='card-body' 
                   data-mbd-perfect-scrollbar='true' 
                   style={ {position: 'relative', height: '400px'} }
               >
                {/* TODO: Add loading spinner */}
                {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : tasksTable}

              </div>
            </div>
              <TaskForm add={addTask} length={tasks.length}/>
        </div>  

        {/* <TaskComponent task={defaultTask} /> */}
    </div>
  )
}

export default TaskListComponent
