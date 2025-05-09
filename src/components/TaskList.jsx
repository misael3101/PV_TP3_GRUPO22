import React from 'react'
import TaskInput from './TaskInput'
import { useState } from 'react'
import TaskItem from './TaskItem'

const TaskList = () => {

    const [tareas, setTareas] = useState([])

    const guardarTarea = (nuevaTarea) => {
        setTareas([...tareas, nuevaTarea])
    }
    console.log(tareas)//probar si se guarda la tarea

  return (
    <div>
        <TaskInput guardarTarea={guardarTarea}/>
        <h2>Lista de Tareas</h2>
        <ul>
            {tareas.map((tarea, index) => (<TaskItem key={index} tarea={tarea} />))}
        </ul>
    </div>
  )
}

export default TaskList