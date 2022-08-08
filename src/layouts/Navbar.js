import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='pt-5 pb-5' >
            <Link to="/" className='mx-5 font-bold text-xl hover:bg-orange-600 rounded-lg p-2 hover:text-white active:bg-orange-700' >Home</Link>
            <Link to="show-task" className='font-bold text-xl hover:bg-orange-600 rounded-lg p-2 hover:text-white active:bg-orange-700' >Show Task</Link>
            <Link to="add-task" className='mx-5 font-bold text-xl hover:bg-orange-600 rounded-lg p-2 hover:text-white active:bg-orange-700' >Add Task</Link>
        </nav>
    );
};

export default Navbar;