import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {loginTC} from "../../redux/auth-reducer";
import {useDispatch} from "react-redux";
import TextAreaControl from "../common/FormControl/TextAreaControl";
import styles from '../common/FormControl/TextAreaControl.module.css'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
//: React.FC<InjectedFormProps<FormDataType>>
const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={TextAreaControl}></Field>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={TextAreaControl}></Field>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'}></Field> Remember me
                </div>
                <div className={styles.errorFromServer}>
                    {props.error}
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
};

const Login = () => {
    const dispatch = useDispatch()

    const onSubmit = (formdata: FormDataType) => {
        dispatch(loginTC(formdata.login, formdata.password, formdata.rememberMe))
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'} )(LoginForm)

export default Login;
