import {useState} from "react";
import {Task} from "./Task";

export const TaskList = () =>{
    const [listaTareas, setListaTareas] = useState([
        { id: 1, tarea: "Tarea 1: Ir a preparar las actividades", estado: false },
        { id: 2, tarea: "Tarea 2", estado: false },
        { id: 3, tarea: "Tarea 3", estado: false },
        { id: 4, tarea: "Tarea 4", estado: false },
        { id: 5, tarea: "Tarea 5", estado: true },
    ]);
    console.log("LISTA INICIAL: ", listaTareas);

    return (
        <div>
            <ul>
                {
                    listaTareas.map(task => <Task key={task.id} id={task.id} tarea={task.tarea} estado={task.estado}/>)
                }
            </ul>

        </div>
    )
}

export default TaskList;