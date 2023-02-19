import React, {ChangeEvent, useState} from 'react';
import classes from "../Dialogs.module.css";
import DialogItem from "../DialogItem/DialogItem";
import Message from "./Message";
import {DialogPropsType} from "../DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import TextAreaControl from "../../common/FormControl/TextAreaControl";
import {maxLength as FunctionMaxLength, required} from "../../../utils/validators/validators";
const maxLength = FunctionMaxLength(111)


//DialogPropsType импортим и получаем пропсы из пропс контейнера
const Dialogs = (props: DialogPropsType) => {

    const buttonOnClickHandler = (values: any) => {
        props.sendMessage(values.newMessageBody)
        // setTextAreaInput('')
        // alert('ato')
    }

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id} key={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className='messages'>
                <div>
                    {messagesElements}
                    <LoginReduxForm onSubmit={buttonOnClickHandler}/>
                </div>
            </div>
        </div>
    );
};

type FormDataType = {
    // login: string
    // password: string
    // rememberMe: boolean

}

const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  validate={[required, maxLength]} placeholder={'Enter your message'} name={'newMessageBody'} component={TextAreaControl}></Field>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'} )(AddMessageForm)


export default Dialogs;