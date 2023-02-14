import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../redux/profilePageReducer";


const Profile = (props: {profile: ProfileUserType, status: string, setStatus: (status: string) => void}) => {
    // console.log(props.profile)
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} setStatus={props.setStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;