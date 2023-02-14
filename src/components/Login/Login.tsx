import React from 'react';
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {loginAPI} from "../../api/api";
import {log} from "util";

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
                    <Field placeholder={'Login'} name={'login'} component={'input'}></Field>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={'input'}></Field>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'}></Field> Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
};

const Login = () => {

    const onSubmit = (formdata: FormDataType) => {
        const payload = {
            email: formdata.login,
            password: formdata.password,
            rememberMe: formdata.rememberMe
        }
        loginAPI(payload).then(res => console.log(res))
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
