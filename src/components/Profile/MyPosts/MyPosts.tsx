import React, {ChangeEvent, useState} from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";



const MyPosts = (props: MyPostsPropsType) => {


    let postElements = props.profilePage.postsData.map(p => <Post message={p.message} likes={p.likes} id={p.id} key={p.id}/>)
    let [textAreaInput, setTextAreaInput] = useState<string>('')



    const onClickButtonHandler = () => {
        props.addPost(textAreaInput)
        setTextAreaInput('')
    }

    const textAreaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaInput(e.currentTarget.value)
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