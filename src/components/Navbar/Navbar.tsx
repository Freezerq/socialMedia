import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div><NavLink to="/profile" className={classes.item} activeClassName={classes.active}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" className={classes.item} activeClassName={classes.active}>Dialogs</NavLink></div>
            <div><NavLink to="/users" className={classes.item} activeClassName={classes.active}>Users</NavLink></div>
            <div><NavLink to="/news" className={classes.item} activeClassName={classes.active}>News</NavLink></div>
            <div><NavLink to="/music" className={classes.item} activeClassName={classes.active}>Music</NavLink></div>
        </nav>
    );
};

export default Navbar;