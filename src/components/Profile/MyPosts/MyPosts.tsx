import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.content}>
            <div>
                My posts
                <div className={classes.postarea}>
                    <textarea></textarea>
                    <button>Добавить пост</button>
                </div>
            </div>
            <Post message='Hi, How are you?' likes={5}/>
            <Post message='Hi, what a well weather!' likes={7}/>
        </div>
    );
};

export default MyPosts;