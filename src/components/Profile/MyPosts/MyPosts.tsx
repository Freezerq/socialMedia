import React, {ChangeEvent, useState} from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import TextAreaControl from "../../common/FormControl/TextAreaControl";
import {maxLength as FunctionMaxLength, required} from "../../../utils/validators/validators";

const maxLength = FunctionMaxLength(10)

const MyPosts = (props: MyPostsPropsType) => {


    let postElements = props.profilePage.postsData.map(p => <Post message={p.message} likes={p.likes} id={p.id} key={p.id}/>)

    const onSubmit = (values: FormDataType) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={classes.content}>
            <div>
                <h2>My posts</h2>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
            {postElements}
        </div>
    );
};
type FormDataType = {
    newPostBody: string
}

const AddNewPostForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength]}  name={'newPostBody'} component={TextAreaControl}></Field>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'profileAddNewPostForm'} )(AddNewPostForm)

export default MyPosts;