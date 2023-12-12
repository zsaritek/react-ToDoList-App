
import { useState } from "react";

function EditToForm({ editToDo, task }) {

    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editToDo(value, task.id);
        // setValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="EditToForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Update task' />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default EditToForm;