import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    store: StoreType
}

const Profile = ({store}: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    );
};

export default Profile;