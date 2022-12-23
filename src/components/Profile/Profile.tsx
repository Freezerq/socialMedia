import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";



type ProfilePropsType = {
    state: {
        postsData: Array<PostType>
        addPost: (message: string) => void
    }
}

const Profile = ({state}: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={state.postsData} addPost={state.addPost}/>
        </div>
    );
};

export default Profile;