import React from 'react';
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import {ProfileUserType} from "../../../redux/profilePageReducer";


const ProfileInfo = (props: {profile: ProfileUserType, status: string, setStatus: (status: string) => void})  => {
    // console.log(props.profile)
    return (
        <div>
            <h3>{props.profile.fullName}</h3>
            <div>
                <img className={classes.fonImage} src={props.profile.photos.small? props.profile.photos.small : 'NO IMAGE'} alt="NO IMAGE"/>
            </div>
            {/*<div>{props.status}</div>*/}
            <ProfileStatus statuss={props.status} setStatus={props.setStatus} />
            {/*<div className={classes.description}>*/}
            {/*    {props.profile.lookingForAJobDescription}*/}
            {/*</div>*/}
        </div>
    );
};

export default ProfileInfo;