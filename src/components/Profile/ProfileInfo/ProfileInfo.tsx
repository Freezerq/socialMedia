import React from 'react';
import classes from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../redux/profilePageReducer";

const ProfileInfo = (props: any) => {
    return (
        <div>
            <h3>{props.profile.fullName}</h3>
            <div>
                <img className={classes.fonImage} src={props.profile.photos.small? props.profile.photos.small : 'NO IMAGE'} alt="NO IMAGE"/>
            </div>
            <div className={classes.description}>
                {props.profile.lookingForAJobDescription}
            </div>
        </div>
    );
};

export default ProfileInfo;