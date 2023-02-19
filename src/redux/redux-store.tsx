import {applyMiddleware, combineReducers, createStore} from "redux"
import profilePageReducer, {
    AddPostActionType,
    setProfileUserActionType,
    SetStatusActionType
} from "./profilePageReducer";
import dialogsPageReducer, {SendMessageActionType} from "./dialogsPageReducer";
import usersPageReducer, {
    ChangePageActionType,
    FollowActionType, followingInProgressActionType,
    SetActionType, ToggleIsFetchingActionType, TotalUsersCountActionType,
    UnFollowActionType
} from "./usersPageReducer";
import authReducer, {logOutAC, LogOutActionType, SetUserDataActionType} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';


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
    | SetStatusActionType
    | LogOutActionType


export const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    authReducer: authReducer,
    form: formReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store;

