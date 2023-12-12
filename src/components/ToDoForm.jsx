import { useState } from "react"
import "./todoform.css"

function ToDoForm({ addToDo }) {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();

        addToDo(value)
    }
    return (
        <form onSubmit={handleSubmit} className="ToDoForm">
            <input type="text" className="ToDo-input" placeholder="What kind of skills do we need to improve today ? " onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}

export default ToDoForm