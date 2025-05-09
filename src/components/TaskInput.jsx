import React, { useState } from 'react'

const TaskInput = ({guardarTarea}) => {
  
  const [tarea, setTarea] = useState("");

  const agregarLista = () => {
    guardarTarea(tarea);
    setTarea("");
  }

  
  return (
    <div>
        <label htmlFor="">Ingresar Tarea</label>
        <input type="text" value={tarea} onChange={(e) => setTarea(e.target.value)} placeholder="Nueva Tarea" />
        <button onClick={agregarLista}>Agregar</button>
    </div>
  )
}

export default TaskInput;
