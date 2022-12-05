import React from 'react';
import classes from "./Profile.module.css"


const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.fonImage} src="https://wallpaperaccess.com/full/87755.jpg" alt="beach"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    new post
                </div>
            </div>
            <div className={classes.item}>
                post 1
            </div>
            <div className={classes.item}>
                post 2
            </div>
        </div>
    );
};

export default Profile;