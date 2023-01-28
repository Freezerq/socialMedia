// export const AddPostAC = (message: string): AddPostActionType => {
//     return {
//         type: "ADD-POST",
//         message: message
//     }
// }
// import {ActionTypes} from "./profilePageReducer";


import {ActionTypes} from "./redux-store";

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

export const SetActionCreator = (list: Array<UserType>) => {
    return {
        type: "SET",
        list: list
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
}

const initialState: usersPageInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: false
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
    }
    return state
}

export default usersPageReducer