import React from 'react';
import classes from "./Post.module.css";

type PostPropsType = {
    message: string
    likes: number
}

const Post = (props:PostPropsType) => {
    return (
        <div>
            <div className={classes.item}>
                <img className={classes.catAvatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHkK77mE5-SM2JrHo6Zla85AMGiwJJLCrjA&usqp=CAU" alt=""/>
                {props.message}
            </div>
            <div>
                {props.likes} likes
            </div>
        </div>
    );
};

export default Post;