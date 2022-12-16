import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Dimych' id={1}/>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Sveta</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Sasha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Lera</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>Igor</NavLink>
                </div>
            </div>
            <div className='messages'>
                <div>
                    <div className={classes.message}>Hi</div>
                    <div className={classes.message}>Hello there</div>
                    <div className={classes.message}>Whats up?</div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;