import React, {ChangeEvent} from 'react';
import classes from "../Dialogs.module.css";
import DialogItem from "../DialogItem/DialogItem";
import Message from "./Message";
import {DialogType, MessageType} from "../../../redux/state";

type DialogsPropsType = {
    buttonOnClick: () => void
    dialogsElements: Array<DialogType>
    messagesElements: Array<MessageType>
    textAreaOnChange: (text: string) => void
    textAreaInput: string
}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsElements.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.messagesElements.map(m => <Message message={m.message} id={m.id} key={m.id}/>)

    const buttonOnClickHandler = () => {
        props.buttonOnClick()
    }

    const textAreaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.textAreaOnChange(e.currentTarget.value)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className='messages'>
                <div>
                    {messagesElements}
                    <div>
                        <textarea onChange={textAreaOnChange} value={props.textAreaInput} placeholder={"Введите сообщение"}></textarea>
                        <button onClick={buttonOnClickHandler}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;