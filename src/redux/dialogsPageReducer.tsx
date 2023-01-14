import {ActionTypes, DialogType, MessageType, PostType, SendMessageActionType, StateType} from "./state";

export const SendMessageAC = (message: string): any => {
    return {
        type: "SEND-MESSAGE",
        message: message
    }

}

type dialogsPageInitialStateType = {
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

const dialogsPageReducer = (state: dialogsPageInitialStateType = initialState, action: any) => {

    switch (action.type) {
        case "SEND-MESSAGE":
            if (action.message) {
                let post: MessageType = {
                    message: action.message, // тут должен приходить message каким-то образом
                    id: 7,
                }
                state.messagesData.push(post)
                console.log(state.messagesData)
            }
            break;
        default:
            return state
    }
    return state
}
export default dialogsPageReducer