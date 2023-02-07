import React, {ChangeEvent, useState} from 'react';
import classes from "../Dialogs.module.css";
import DialogItem from "../DialogItem/DialogItem";
import Message from "./Message";
import {DialogPropsType} from "../DialogsContainer";
import {Redirect} from "react-router-dom";
import Login from "../../Login/Login";



//DialogPropsType импортим и получаем пропсы из пропс контейнера
const Dialogs = (props: DialogPropsType) => {


    const [textAreaInput, setTextAreaInput] = useState('')


    const textAreaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaInput(e.currentTarget.value)
    }
    const buttonOnClickHandler = () => {
        props.sendMessage(textAreaInput)
        setTextAreaInput('')
    }

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id} key={m.id}/>)


    if (!props.isAuth) return <Redirect to={'/login'}/>

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