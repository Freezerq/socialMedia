import {ActionTypes} from "./redux-store";

export type DialogType = {
    name: string
    id: number
}

export type MessageType = {
    message: string
    id: number
}

export const SendMessageAC = (message: string): any => {
    return {
        type: "SEND-MESSAGE",
        message: message
    }
}


export type SendMessageActionType = {
    type: "SEND-MESSAGE"
    message: string
}

export type dialogsPageInitialStateType = {
    messagesData: Array<MessageType>,
    dialogsData: Array<DialogType>,
}

let initialState = {
    messagesData: [
        {message: 'Hi Dimon', id: 1},
        {message: 'Hi Svet', id: 2},
        {message: 'Hi San', id: 3},
        {message: 'Hello L', id: 4},
        {message: 'Salam Igo', id: 5},
        {message: 'Yoyo', id: 6}
    ],
    dialogsData: [
        {name: 'Dimych', id: 1},
        {name: 'Sveta', id: 2},
        {name: 'Sasha', id: 3},
        {name: 'Lera', id: 4},
        {name: 'Igor', id: 5},
        {name: 'Valera', id: 6},
    ],
}

const dialogsPageReducer = (state: dialogsPageInitialStateType = initialState, action: ActionTypes): dialogsPageInitialStateType => {

    switch (action.type) {
        case "SEND-MESSAGE":
            if (action.message) {
                return {
                    ...state,
                    messagesData: [...state.messagesData, {message: action.message, id: 7,}]
                }
            }
    }
    return state
}
export default dialogsPageReducer