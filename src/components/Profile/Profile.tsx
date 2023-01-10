import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostType} from "../../redux/state";


type ProfilePropsType = {
    postsData: Array<PostType>
    dispatch: (action: ActionTypes) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;