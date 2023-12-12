import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "./todo.css"


function ToDo(props) {
    const { task, deleteToDo, editToDo, toggleComplete } = props

    return (
        <div className="Todo">
            <p onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editToDo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)} />
            </div>
        </div>
    )
}

export default ToDo