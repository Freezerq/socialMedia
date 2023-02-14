import {PostType} from "./state";
import {ActionTypes} from "./redux-store";
import {amIloggedInAPI, getProfileAPI, getProfileStatusAPI, setProfileStatusAPI} from "../api/api";
import {Dispatch} from "redux";
import {setUserDataAC} from "./auth-reducer";

export const addPostAC = (message: string): AddPostActionType => ({type: "ADD-POST", message: message})
export const setStatusAC = (status: string): SetStatusActionType => ({type: "SET-STATUS", status})
// export const getStatusAC = (): GetStatusActionType => ({type: "GET-STATUS"})
export const setProfileUserAC = (profile: ProfileUserType): setProfileUserActionType => ({
    type: "SET_PROFILE_USER",
    profile: profile
})


// export type GetStatusActionType = {
//     type: "GET-STATUS"
// }

export type AddPostActionType = {
    type: "ADD-POST"
    message: string
}

export type SetStatusActionType = {
    type: "SET-STATUS"
    status: string
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
    status: string
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
        userId: 0,
    },
    status: ''
}

const profilePageReducer = (state: profilePageInitialStateType = initialState, action: ActionTypes): profilePageInitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            if (action.message) {
                return {
                    ...state,
                    postsData: [...state.postsData, {message: action.message, id: 7, likes: 0}]
                }
            } else return state
        case "SET_PROFILE_USER":
            return {
                ...state,
                profile: {...action.profile, photos: {...action.profile.photos}}
            }
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }
    }
    return state
}


export const getProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        getProfileAPI(Number(userId)).then((response) => {
            const userProfile: ProfileUserType = {
                photos: response.data.photos,
                userId: response.data.userId,
                fullName: response.data.fullName,
                lookingForAJobDescription: response.data.lookingForAJobDescription,
            }
            dispatch(setProfileUserAC(userProfile))
        })
    }
}

export const getProfileStatusThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        getProfileStatusAPI(userId).then((response) => {
            dispatch(setStatusAC(response.data))
        })
    }
}

export const setProfileStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        setProfileStatusAPI(status).then((response) => {
            // console.log('setProfileStatusThunkCreator' + response)
            // debugger
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
    }
}


export default profilePageReducer