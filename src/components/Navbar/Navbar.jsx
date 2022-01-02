import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <Link to="/create">Create Product</Link>
            <Link to="/">Product List</Link>
        </nav>
    );
};

export default Navbar;
