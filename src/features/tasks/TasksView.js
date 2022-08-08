import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask } from './TasksSlice';

const TasksView = () => {
    const tasks = useSelector((state) => state.tasksReducer.task);
    const { id, task, author } = tasks;

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    return (
        <div>
            <h2>View All Tasks</h2>
            <div class="overflow-x-auto px-20">
                <table class="table w-full">
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Name</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks && tasks.map(t => {
                                const { id, task, author } = t;
                                return <>

                                    <tr key={id}>
                                        {/* <th>{id}</th> */}
                                        <td>{author}</td>
                                        <td>{task}</td>
                                        <td> <Link to="/edit-task" state={{ id, task, author }}>
                                            <button className='btn btn-sm btn-primary mx-5'>Edit</button>
                                        </Link>

                                            <button onClick={() => { handleDelete(id) }} className='btn btn-sm btn-error'>Delete</button>
                                        </td>

                                    </tr>
                                </>
                            })
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TasksView;