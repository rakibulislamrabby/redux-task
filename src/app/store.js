import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/TasksSlice"

const store = configureStore({
    reducer: {
        tasksReducer: tasksReducer,
    }
});
export default store