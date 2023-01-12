import React, {ChangeEvent, useState} from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionTypes, DialogType, MessageType} from "../../redux/state";
import {SendMessageAC} from "../../redux/dialogsPageReducer";


type DialogsPropsType = {
    state: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
    }
    dispatch: (action: ActionTypes) => void
}


const Dialogs = ({state, dispatch}: DialogsPropsType) => {

    const [textAreaInput, setTextAreaInput] = useState('')
    const textAreaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaInput(e.currentTarget.value)
    }
    const buttonOnClickHandler = () => {
        dispatch(SendMessageAC(textAreaInput))
        setTextAreaInput('')
    }

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
                    <div>
                        <textarea onChange={textAreaOnChange} value={textAreaInput} placeholder={"Введите сообщение"}></textarea>
                        <button onClick={buttonOnClickHandler}>Send message</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;