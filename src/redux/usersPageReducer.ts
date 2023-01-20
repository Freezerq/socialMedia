// export const AddPostAC = (message: string): AddPostActionType => {
//     return {
//         type: "ADD-POST",
//         message: message
//     }
// }
// import {ActionTypes} from "./profilePageReducer";
import {ActionTypes} from "./redux-store";

export const followAC = (id: number): FollowActionType => {
    return {
        type: "FOLLOW",
        id: id
    }
}


export type FollowActionType = {
    type: "FOLLOW"
    id: number
}

export const unFollowAC = (id: number): UnFollowActionType => {
    return {
        type: "UN_FOLLOW",
        id: id
    }
}


export type UnFollowActionType = {
    type: "UN_FOLLOW"
    id: number
}


export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type usersPageInitialStateType = {
    users: Array<UserType>
}

const initialState: usersPageInitialStateType = {
    users: [
        {id: 1, followed: false, fullName: 'YOLO', location: {city: "Minsk", country: 'Belarus'}, status: "Mudila"},
        {id: 2, followed: true, fullName: '2', location: {city: "Minsk", country: 'Belarus'}, status: "Mudila"},
        {id: 3, followed: false, fullName: '3', location: {city: "Minsk", country: 'Belarus'}, status: "Mudila"},
        {id: 4, followed: true, fullName: '4', location: {city: "Minsk", country: 'Belarus'}, status: "Mudila"},
    ]
}

const profilePageReducer = (state: usersPageInitialStateType = initialState , action: ActionTypes):usersPageInitialStateType  => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.id? {...u, followed: true} : u)
            }
    }
    return state
}

export default profilePageReducer