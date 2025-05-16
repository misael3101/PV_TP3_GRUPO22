import React from 'react'
import TaskInput from './TaskInput'
import { useState } from 'react'
import TaskItem from './TaskItem'


const TaskList = () => {

    const [tareas, setTareas] = useState([])
    const [id, setID] = useState(1)

    const guardarTarea = (nuevaTarea) => {
        if (nuevaTarea.trim() === "") {
            alert("No se puede agregar una tarea vacía")
            return
        }                       
        setTareas([...tareas,{tid:id, texto:nuevaTarea}])
        setID(id+1);
    }
    console.log(tareas)//probar si se guarda la tarea

    const eliminarTarea = (tid) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.tid !==tid);
        setTareas(tareasActualizadas);
    }

  return (
    <div className='contenedor'>
        <TaskInput guardarTarea={guardarTarea}/>
        <h2>Lista de Tareas</h2>
        <ul>
            {tareas.map((tarea) => (<TaskItem key={tarea.tid} tarea={tarea} eliminarTarea={eliminarTarea}/>))}
        </ul>
    </div>
  )
}

export default TaskList