import React from 'react'
import { useState } from 'react'

const TaskItem = (props) => {

    const [realizado, setRealizado] = useState(false)

    const Realizado = () => {
    setRealizado(!realizado)
}
  return (


  <>
    <li className={realizado ? 'tachada' : ''}>{props.tarea}</li>
    <button onClick={Realizado}>Realizado</button>
    <button>Eliminar</button>
  </>
    
  )
}

export default TaskItem