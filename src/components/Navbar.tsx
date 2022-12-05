import React from 'react';
import classes from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <a className={classes.item}>Profile</a>
            <a className={classes.item}>Messages</a>
            <a className={classes.item}>News</a>
            <a className={classes.item}>Music</a>
        </nav>
    );
};

export default Navbar;