import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";



const Header = (props: HeaderPropsType) => {

    const logOut = () => {
        props.logOut()
    }


    return <header className={classes.header}>
        <img className={classes.headerLogo}
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="logo"/>
        <div style={{float: 'right'}}>
            <div>{props.headerPage.isAuth?
                <div><
                    div>{`Your email is: ${props.headerPage.data.email}`}</div>
                    <div><button style={{float: 'right'}} onClick={logOut}>Logout</button></div>
                </div>
                : <NavLink to='/login'>LOGIN</NavLink>
            }</div>
        </div>
    </header>
}

export default Header;