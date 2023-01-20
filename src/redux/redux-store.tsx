import {combineReducers, createStore} from "redux"
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";




export const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

