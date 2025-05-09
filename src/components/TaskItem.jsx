import React from 'react'
import { useState } from 'react'

const TaskItem = (props) => {

    console.log(props.tareas)

    const [realizado, setRealizado] = useState(false)

    const Realizado = () => {
    setRealizado(!realizado)
}   

    const eliminar = () => {
        props.eliminarTarea(props.index)
    }
  return (


  <>
    <li className={realizado ? 'tachada' : ''}>{props.tarea}</li>
    <button onClick={Realizado}>Realizado</button>
    <button onClick={() => {
        if (realizado) {
            eliminar();
         } else {
             alert("No es posible eliminar una tarea no realizada");
        }}}>Eliminar
    </button>
  </>
    
  )
}

export default TaskItem