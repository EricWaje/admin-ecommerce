import React from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import './Navbar.css';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link to={to} {...props} className={match ? 'active' : 'normal'}>
                {children}
            </Link>
        </div>
    );
};

const Navbar = () => {
    return (
        <nav>
            <CustomLink to="/create">Create Product</CustomLink>
            <CustomLink to="/">Product List</CustomLink>
        </nav>
    );
};

export default Navbar;
