import { useState } from "react"
import ToDoForm from "./ToDoForm"
import { v4 as uuidv4 } from 'uuid';
import ToDo from "./ToDo";
import EditToForm from "./EditToForm";
import "./todowrapper.css"

function TodoWrapper() {
    const [toDos, setToDos] = useState([])

    const addToDo = toDo => {
        setToDos([...toDos, { id: uuidv4(), task: toDo, completed: false, isEditing: false }])
    }
    const toggleComplete = id => {
        setToDos(toDos.map(toDo => toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo))
    }
    const deleteToDo = id => {
        setToDos(toDos.filter(toDo => toDo.id !== id))
    }
    const editToDo = id => {
        setToDos(toDos.map(toDo => toDo.id === id ? { ...toDo, isEditing: !toDo.isEditing } : toDo))
    }

    const editTask = (task, id) => {
        setToDos(toDos.map(toDo => toDo.id === id ? {
            ...toDo, task, isEditing: !toDo.isEditing
        } : toDo))
    }

    return (
        <div className='TodoWrapper'>
            <h1>What kind of tasks do I need to finish today?</h1>
            <ToDoForm addToDo={addToDo} />
            {toDos.map((toDo) => (
                toDo.isEditing ? (<EditToForm key={toDo.id} editToDo={editTask} task={toDo} />
                ) : (
                    <ToDo task={toDo} key={toDo.id} toggleComplete={toggleComplete} deleteToDo={deleteToDo} editToDo={editToDo} />
                )
            ))}
        </div>
    );
}

export default TodoWrapper;
