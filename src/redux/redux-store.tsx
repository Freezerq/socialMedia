import {combineReducers, createStore} from "redux"
import profilePageReducer, {AddPostActionType, setProfileUserActionType} from "./profilePageReducer";
import dialogsPageReducer, {SendMessageActionType} from "./dialogsPageReducer";
import usersPageReducer, {
    ChangePageActionType,
    FollowActionType, followingInProgressActionType,
    SetActionType, ToggleIsFetchingActionType, TotalUsersCountActionType,
    UnFollowActionType
} from "./usersPageReducer";
import authReducer, {SetUserDataActionType} from "./auth-reducer";

export type ActionTypes =
    AddPostActionType
    | SendMessageActionType
    | FollowActionType
    | UnFollowActionType
    | SetActionType
    | ChangePageActionType
    | TotalUsersCountActionType
    | ToggleIsFetchingActionType
    | setProfileUserActionType
    | SetUserDataActionType
    | followingInProgressActionType


export const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    authReducer: authReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


// @ts-ignore
window.store = store;

