// export const AddPostAC = (message: string): AddPostActionType => {
//     return {
//         type: "ADD-POST",
//         message: message
//     }
// }



import {ActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {amIloggedInAPI, loginAPI, logoutAPI} from "../api/api";
import {stopSubmit} from "redux-form";



export type SetUserDataActionType = {
    type: "SET_USER_DATA"
    data: {
        id: number,
        login: null | string,
        email: null | string
    }
    messages: Array<any>

}

export const setUserDataAC = (data: { id: number, login: null|string, email: null|string }, messages: Array<any>): SetUserDataActionType => {
    return {
        type: "SET_USER_DATA",
        data: data,
        messages: messages,
    }
}

export const logOutAC = (): LogOutActionType => {
    return {
        type: "LOG_OUT",
    }
}

export type LogOutActionType = ({type: "LOG_OUT"})


export type AuthInitialStateType = {
    data: {
        id: number
        login: null | string,
        email: null | string
    },
    messages: null | Array<any>,
    isAuth: boolean
}

const authReducerInitialState: AuthInitialStateType = {
    data: {
        id: 0,
        login: null,
        email: null
    },
    messages: null,
    isAuth: false
}


const authReducer = (state: AuthInitialStateType = authReducerInitialState, action: ActionTypes): AuthInitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                data: {...action.data},
                messages: {...action.messages},
                isAuth: true
            }
        case "LOG_OUT":
            return {
                ...state,
                isAuth: false
            }
    }
    return state
}



export const isLoggedInThunkCreator = () => {
    return (dispatch: Dispatch) => {
        amIloggedInAPI().then((response) => {
            const data = {
                id: response.data.data.id,
                login: response.data.data.login,
                email: response.data.data.email,
            }
            const messages = response.data.messages
            if (data.email !== undefined) {
                dispatch(setUserDataAC(data, messages))
            }
        })
    }
}
export const logOutTC = () => {
    return (dispatch: Dispatch) => {
        logoutAPI().then(res => {
            dispatch(logOutAC())
            if (res.data.resultCode === 0) {
                dispatch(logOutAC())
            }
        })

    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    const payload = {
        email: email,
        password: password,
        rememberMe: rememberMe
    }
    return (dispatch: Dispatch) => {
        loginAPI(payload).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserDataAC({id: res.data.userId, login: '1', email: email}, []))
            }
            else {
                // dispatch(stopSubmit('login', {login: "Email is wrong"}))
                dispatch(stopSubmit('login', {_error: res.data.messages[0]}))
            }
        })

    }
}


//logoutAPI()


export default authReducer