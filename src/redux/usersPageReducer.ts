import {ActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {followAPI, getProfileAPI, getUsersApi, unFollowAPI} from "../api/api";
import {setUserDataAC} from "./auth-reducer";
import {ProfileUserType, setProfileUserAC} from "./profilePageReducer";

export type SetActionType = {
    type: "SET"
    list: Array<UserType>
}

export type FollowActionType = {
    type: "FOLLOW"
    id: number
}

export type ChangePageActionType = {
    type: "CHANGE_PAGE"
    page: number
}

export type TotalUsersCountActionType = {
    type: "GET_TOTAL_USERS_COUNT"
    totalUsersCount: number
}

export type ToggleIsFetchingActionType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}

export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching: isFetching
    }
}

export const getTotalUsersCountAC = (totalUsersCount: number): TotalUsersCountActionType => {
    return {
        type: "GET_TOTAL_USERS_COUNT",
        totalUsersCount: totalUsersCount
    }
}

export const changePageAC = (page: number): ChangePageActionType => {
    return {
        type: "CHANGE_PAGE",
        page: page
    }
}

export const unFollowAC = (id: number): UnFollowActionType => {
    return {
        type: "UN_FOLLOW",
        id: id
    }
}

export const followAC = (id: number): FollowActionType => {
    return {
        type: "FOLLOW",
        id: id
    }
}

export const setActionCreator = (list: Array<UserType>) => {
    return {
        type: "SET",
        list: list
    }
}

export type followingInProgressActionType = {
    type: "SET_FOLLOWING_IN_PROGRESS"
    followingInProgress: number
}

export const followingInProgressAC = (followingInProgress: number): followingInProgressActionType => {
    return {
        type: "SET_FOLLOWING_IN_PROGRESS",
        followingInProgress: followingInProgress
    }
}

export type UnFollowActionType = {
    type: "UN_FOLLOW"
    id: number
}

export type UserType = {
    id: number
    followed: boolean | null
    name: string | null
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }

}

export type usersPageInitialStateType = {
    users: Array<UserType>,
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: usersPageInitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersPageReducer = (state: usersPageInitialStateType = initialState, action: ActionTypes): usersPageInitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)
            }
        case "UN_FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)
            }
        case "SET":
            return {
                ...state,
                users: [...action.list]
            }
        case "CHANGE_PAGE":
            return {
                ...state,
                currentPage: action.page
            }
        case "GET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "SET_FOLLOWING_IN_PROGRESS":
            const copy = {
                ...state,
                followingInProgress: [...state.followingInProgress]
            }
            if (copy.followingInProgress.indexOf(action.followingInProgress) >= 0) {
                return {
                    ...copy,
                    followingInProgress: copy.followingInProgress.filter(u => u !== action.followingInProgress)
                }
            } else {
                return {
                    ...copy,
                    followingInProgress: [...copy.followingInProgress, action.followingInProgress]
                }
            }

    }
    return state
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return  (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        getUsersApi(currentPage, pageSize).then((response) => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setActionCreator(response.items))
            dispatch(getTotalUsersCountAC(response.totalCount))
        })
    }
}


export const followThunkCreator = (userId: number) => {
    return  (dispatch: Dispatch) => {
        dispatch(followingInProgressAC(userId))
        followAPI(userId).then(res => {
            if (res === 0) {
                dispatch(followAC(userId))
            }
            dispatch(followingInProgressAC(userId))

        })
    }
}


export const unFollowThunkCreator = (userId: number) => {
    return  (dispatch: Dispatch) => {
        dispatch(followingInProgressAC(userId))
        unFollowAPI(userId).then(res => {
            if (res === 0) {
                dispatch(unFollowAC(userId))
            }
            dispatch(followingInProgressAC(userId))

        })
    }
}

export const getProfileThunkCreator = (userId: string) => {
    return  (dispatch: Dispatch) => {
        getProfileAPI(userId).then((response) => {
            const userProfile: ProfileUserType = {
                photos: response.data.photos,
                userId: response.data.userId,
                fullName: response.data.fullName,
                lookingForAJobDescription: response.data.lookingForAJobDescription
            }
            dispatch(setProfileUserAC(userProfile))
        })
    }
}



export default usersPageReducer