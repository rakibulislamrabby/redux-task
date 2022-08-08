import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTask } from './TasksSlice';
import { v4 as uuidv4 } from 'uuid';
const AddTask = () => {
    const [task, setTask] = useState("")
    const [author, setAuthor] = useState("")

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const numberOfBooks = useSelector((state) => state.tasksReducer.task.length);

    const handleSubmit = (event) => {
        event.preventDefault();
        const book = { id: uuidv4(), task, author };
        dispatch(addTask(book));
        navigate("/show-task")
    }
    return (
        <div>
            <h2 className='text-xl'>Add a new Task</h2>
            <form onSubmit={handleSubmit}>
                <div className=' grid justify-items-center mt-20'>
                    <div>
                        <label className="input-group">
                            <span>Task</span>
                            <input type="text" name='task' value={task} onChange={(e) => setTask(e.target.value)} />
                        </label>
                    </div>  <br />
                    <div className="">
                        <label className="input-group">
                            <span>Author</span>
                            <input type="text" name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </label>
                    </div>
                    <button className='btn btn-sm btn-success mt-5'>Add Task</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;