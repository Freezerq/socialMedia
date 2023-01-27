import {combineReducers, createStore} from "redux"
import profilePageReducer, {AddPostActionType} from "./profilePageReducer";
import dialogsPageReducer, {SendMessageActionType} from "./dialogsPageReducer";
import usersPageReducer, {
    ChangePageActionType,
    FollowActionType,
    SetActionType, TotalUsersCountActionType,
    UnFollowActionType
} from "./usersPageReducer";

export type ActionTypes = AddPostActionType | SendMessageActionType | FollowActionType | UnFollowActionType
    | SetActionType | ChangePageActionType | TotalUsersCountActionType



export const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

