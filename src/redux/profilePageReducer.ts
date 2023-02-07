import {PostType} from "./state";
import {ActionTypes} from "./redux-store";
import {amIloggedInAPI} from "../api/api";
import {Dispatch} from "redux";
import {setUserDataAC} from "./auth-reducer";

export const AddPostAC = (message: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        message: message
    }
}



export type AddPostActionType = {
    type: "ADD-POST"
    message: string
}

export type ProfileUserType = {
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
    lookingForAJobDescription: string
}

export type setProfileUserActionType = {
    type: "SET_PROFILE_USER"
    profile: ProfileUserType
}



export type profilePageInitialStateType = {
    postsData: Array<PostType>
    profile: ProfileUserType
}

export const setProfileUserAC = (profile: ProfileUserType): setProfileUserActionType => {
    return {
        type: "SET_PROFILE_USER",
        profile: profile
    }
}

const initialState: profilePageInitialStateType = {
    postsData: [
        {message: 'Hi Dimon', id: 1, likes: 1},
        {message: '2 Post', id: 2, likes: 6},
        {message: '3', id: 3, likes: 2},
        {message: '4!!!!', id: 4, likes: 4},
        {message: '555', id: 5, likes: 11},
    ],
    profile: {
        fullName: 'test',
        lookingForAJobDescription: 'test',
        photos: {small: '', large: ''},
        userId: 0
    }
}

const profilePageReducer = (state: profilePageInitialStateType = initialState , action: ActionTypes):profilePageInitialStateType  => {
    switch (action.type) {
        case "ADD-POST":
            if (action.message) {
                return {
                    ...state,
                    postsData: [...state.postsData, {message: action.message, id: 7, likes: 0}]
                }
            }
            else return state
        case "SET_PROFILE_USER":
            return {
                ...state,
                profile: {...action.profile, photos: {...action.profile.photos}}
            }
    }
    return state
}



export default profilePageReducer