import React, {ChangeEvent, useState} from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionTypes,  PostType} from "../../../redux/state";
import {AddPostAC} from "../../../redux/profilePageReducer";


type MyPostsPropsType = {
    postsData: Array<PostType>
    dispatch: (action: ActionTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {


    let postElements = props.postsData.map(p => <Post message={p.message} likes={p.likes} id={p.id} key={p.id}/>)

    let [textAreaInput, setTextAreaInput] = useState<string>('')

    const textAreaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaInput(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        if (textAreaInput.trim()) {
            props.dispatch(AddPostAC(textAreaInput))
            setTextAreaInput('')
            console.log(props.postsData)
        }
        else {
            alert('Пустое сообщение нельзя добавить')
            setTextAreaInput('')
        }
    }


    return (
        <div className={classes.content}>
            <div>
                <h2>My posts</h2>
                <div className={classes.postarea}>
                    <textarea value={textAreaInput} onChange={textAreaOnChange}></textarea>
                    <button onClick={onClickButtonHandler}>Добавить пост</button>
                </div>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;