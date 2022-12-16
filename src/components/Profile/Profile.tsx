import React from 'react';
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div>
            <div>
                <img className={classes.fonImage} src="https://wallpaperaccess.com/full/87755.jpg" alt="beach"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;