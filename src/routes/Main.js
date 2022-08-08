import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddTask from '../features/tasks/AddTask';
import EditTask from '../features/tasks/EditTask';
import TasksView from '../features/tasks/TasksView';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import Error from '../pages/Error';
import Home from '../pages/Home';

const Main = () => {
    return (<div className='bg-green-100'>
        <Navbar></Navbar>
        <main className='bg-green-100 h-screen'>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/show-task' element={<TasksView></TasksView>}></Route>
                <Route path='/add-task' element={<AddTask></AddTask>}></Route>
                <Route path='/edit-task' element={<EditTask></EditTask>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </main>
        <Footer></Footer>
    </div>
    );
};

export default Main;