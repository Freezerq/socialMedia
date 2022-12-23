import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.fonImage} src="https://wallpaperaccess.com/full/87755.jpg" alt="beach"/>
            </div>
            <div className={classes.description}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;