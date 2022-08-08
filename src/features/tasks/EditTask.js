import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateTask } from './TasksSlice';
import { v4 as uuidv4 } from 'uuid';

const EditTask = () => {
    const location = useLocation();
    // console.log(location);
    const [id, setId] = useState(location.state.id);
    const [task, setTask] = useState(location.state.task);
    const [author, setAuthor] = useState(location.state.author);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateTask(({ id, task, author })));
        navigate("/show-task", { replace: true })
    }
    return (
        <div>
            <h2>Edit Task</h2>
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
                    <button className='btn btn-sm btn-success mt-5'>Update Task</button>
                </div>
            </form>
        </div>
    );
};

export default EditTask;