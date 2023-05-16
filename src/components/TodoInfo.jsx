//Muestra en la seccion de abajo: cantidad de tareas pendientes y el boton para eliminar todas las tareas
const TodoInfo = (props) => {
    const {pending} = props;
    return (
        <div className="todoInfo">
            <p>Tasks pending: {pending}</p>
            <button>Clear completed</button>
        </div>
    )
}

export default TodoInfo;