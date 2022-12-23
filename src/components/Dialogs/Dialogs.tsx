import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogType, messageType} from "../../redux/state";




type DialogsPropsType = {
    state: {
        dialogsData: Array<dialogType>
        messagesData: Array<messageType>
    }
}


const Dialogs = ({state}: DialogsPropsType) => {



    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = state.messagesData.map(m => <Message message={m.message} id={m.id} key={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className='messages'>
                <div>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
};

export default Dialogs;