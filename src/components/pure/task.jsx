
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//Models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

//Importamos la hoja de estilos de task
import '../../styles/task.scss'

const TaskComponent = ({ task, complete, remove }) => {
  const { name, description, level, completed } = task
  
  useEffect(() => {
    console.log('Created Task')
    return () => {
      console.log(`Task: ${name} is going to unmount`);
    }
  }, [task]);
  
  /**
   * Function that returns a badge
   * depending on the level of the task
   */
  const taskLevelBadge = () => {
    switch (level) {
      case LEVELS.NORMAL:
          return(
          <h6 className='mb-0'>
            <span className='badge bg-primary'>
              {level}
            </span>  
          </h6>
          )
    
          case LEVELS.URGENT:
            return(
            <h6 className='mb-0'>
              <span className='badge bg-warning'>
                {level}
              </span>  
            </h6>
            )

          case LEVELS.BLOCKING:
            return(
            <h6 className='mb-0'>
              <span className='badge bg-danger'>
                {level}
              </span>  
            </h6>
          )
        default:
          break;      
    }
  }

  /**
   *  Funcion that returns icon depending on completion of the task
   */

  const taskCompletedIcon = () => {
    if(completed) {
      return(<i onClick={()=> complete(task)} className='bi-toggle-on task-action' style={ {color:'green'} }></i>)
    } else {
      return (<i onClick={()=> complete(task)} className='bi-toggle-off task-action' style={ {color:'grey'} }></i>)
    }
  } 

  const taskCompleted = {
    color:'gray',
    textDecoration: 'line-through'
  }

  const taskPending = {
    color: 'red',
    fontWeight: 'bold'
  }

  return (
    <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
        <th>
          <span className='ms-2'>{name}</span>
        </th>
        <td className='aling-middle'>
          <span>{description}</span> 
        </td>
        <td className='aling-middle'>
          {/* Execution of function to return badge element */}
          {taskLevelBadge()}
        </td>
        <td className='aling-middle'>
          {/* Execution of function to return icon depending on completion */}
          {taskCompletedIcon()}
          <i onClick={()=> remove(task)} className='bi-trash task-action' style={ {color:'tomato'} }></i>
        </td>
    </tr>
  )
}

TaskComponent.propTypes = {
 task: PropTypes.instanceOf(Task).isRequired,
 complete: PropTypes.func.isRequired,
 remove: PropTypes.func.isRequired
}

export default TaskComponent
