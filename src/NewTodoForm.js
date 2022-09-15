import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewTodoForm = ({ createTodo }) => {
    
    const [task, setTask] = useState("")

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo({ task, id: uuidv4() });
        setTask("");
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="task">New Todo</label>
                    <input 
                        value={task} 
                        onChange={handleChange}
                        id="task" 
                        name="task" 
                        type="text" 
                        placeholder="Add to List"/>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default NewTodoForm;