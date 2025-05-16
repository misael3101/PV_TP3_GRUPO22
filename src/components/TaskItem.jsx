import React from 'react'
import { useState } from 'react'

const TaskItem = (props) => {

    console.log(props.tarea)

    const [realizado, setRealizado] = useState(false)

    const Realizado = () => {
    setRealizado(!realizado)
}   

    const eliminar = () => {
        props.eliminarTarea(props.tarea.tid)
    }
  return (

  <div className='contenedor-listas'>
    <li className={realizado ? 'tachada' : ''}>{props.tarea.texto}</li>
    <div className='botones'>
        <button className='buton-realizado' onClick={Realizado}>Realizado</button>
        <button className='buton-eliminar' onClick={eliminar}>x</button>
    </div>
    
  </div>
    
  )
}

export default TaskItem