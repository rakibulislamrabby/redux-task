import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialTasks = {
    task: [
        { id: uuidv4(), task: "Tommorrow coding 5 hours", author: "rakibul" },
        { id: uuidv4(), task: "Playing Cricket 1 hours", author: "rakibul" },
    ]
};

export const tasksSlice = createSlice({
    name: "task",
    initialState: initialTasks,
    reducers: {
        showTasks: (state) => state,
        addTask: (state, action) => {
            state.task.push(action.payload)
        },
        updateTask: (state, action) => {
            const { id, task, author } = action.payload;
            const isTaskExist = state.task.filter((task) => task.id === id);
            if (isTaskExist) {
                isTaskExist[0].task = task;
                isTaskExist[0].author = author;
            }
        },
        deleteTask: (state, action) => {
            const id = action.payload;
            state.task = state.task.filter(t => t.id !== id)
        },
    }
});

export const { showTasks, addTask, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;