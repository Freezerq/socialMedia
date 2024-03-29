import React from 'react';
import {addPostAC, profilePageInitialStateType} from "../../../redux/profilePageReducer";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


type ProfileMapStateToPropsType = {
    profilePage: profilePageInitialStateType,
}

type ProfileMapDispatchToPropsType = {
    addPost: (message : string) => void
}

export type MyPostsPropsType = ProfileMapStateToPropsType & ProfileMapDispatchToPropsType

const mapStateToProps = (state: AppStateType): ProfileMapStateToPropsType => {
    return {
        profilePage: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch):ProfileMapDispatchToPropsType  => {
    return {
        addPost: (post: string) => {
            dispatch(addPostAC(post))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;