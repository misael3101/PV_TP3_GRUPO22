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

    const eliminarTarea = (index) => {
        const tareasActualizadas = tareas.filter((tarea, i) => i !==index);
        setTareas(tareasActualizadas);
    }

  return (
    <div>
        <TaskInput guardarTarea={guardarTarea}/>
        <h2>Lista de Tareas</h2>
        <ul>
            {tareas.map((tarea, index) => (<TaskItem index={index} tarea={tarea} eliminarTarea={eliminarTarea}/>))}
        </ul>
    </div>
  )
}

export default TaskList