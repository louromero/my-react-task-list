//Task: Este componente mostrará el nombre, y un indicador del estado de cada tarea. (ej: checkbox, iconos, tachado...)
import React from "react";

export const Task = (props) => {

    return (

        <li>
            <span className="round-button"></span>
            <h3>{props.tarea}</h3>

            <button>Edit</button>

            <button>Delete</button>
        </li>
    )
}

export default Task;