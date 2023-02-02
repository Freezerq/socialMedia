// export const AddPostAC = (message: string): AddPostActionType => {
//     return {
//         type: "ADD-POST",
//         message: message
//     }
// }



import {ActionTypes} from "./redux-store";



export type SetUserDataActionType = {
    type: "SET_USER_DATA"
    data: {
        id: null | number,
        login: null | string,
        email: null | string
    }
    messages: Array<any>

}

export const setUserDataAC = (data: { id: null|number, login: null|string, email: null|string }, messages: Array<any>): SetUserDataActionType => {
    return {
        type: "SET_USER_DATA",
        data: data,
        messages: messages,
    }
}




export type AuthInitialStateType = {
    data: {
        id: null | number,
        login: null | string,
        email: null | string
    },
    messages: null | Array<any>,
    isAuth: boolean
}

const authReducerInitialState: AuthInitialStateType = {
    data: {
        id: null,
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
    }
    return state
}

export default authReducer