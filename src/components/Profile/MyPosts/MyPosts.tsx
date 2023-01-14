import React, {ChangeEvent, useState} from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionTypes,  PostType} from "../../../redux/state";


type MyPostsPropsType = {
    postsData: Array<PostType>
    onClick: (text: string) => void
    textAreaInput: string
    onChange: (text: string) => void
    setTextAreaInput: (text: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {


    let postElements = props.postsData.map(p => <Post message={p.message} likes={p.likes} id={p.id} key={p.id}/>)



    const onClickButtonHandler = () => {
        props.onClick(props.textAreaInput)
        props.setTextAreaInput('')
    }

    const textAreaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(e.currentTarget.value)
    }

    return (
        <div className={classes.content}>
            <div>
                <h2>My posts</h2>
                <div className={classes.postarea}>
                    <textarea value={props.textAreaInput} onChange={textAreaOnChange}></textarea>
                    <button onClick={onClickButtonHandler}>Добавить пост</button>
                </div>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;