import React, {ChangeEvent, useState} from 'react';
import {StoreType} from "../../redux/state";
import {SendMessageAC} from "../../redux/dialogsPageReducer";
import Dialogs from "./Message/Dialogs";


type DialogsContainerPropsType = {
    store: StoreType
}


const DialogsContainer = ({store}: DialogsContainerPropsType) => {
// hey
    const [textAreaInput, setTextAreaInput] = useState('')
    const textAreaOnChange = (text: string) => {
        setTextAreaInput(text)
    }
    const buttonOnClickHandler = () => {
        store.dispatch(SendMessageAC(textAreaInput))
        setTextAreaInput('')
    }

    return <Dialogs
        dialogsElements={store.getState().dialogsPage.dialogsData}
        messagesElements={store.getState().dialogsPage.messagesData}
        textAreaInput={textAreaInput}
        buttonOnClick={buttonOnClickHandler}
        textAreaOnChange={textAreaOnChange}
    />
}

export default DialogsContainer;