import {ActionTypes, MessageType, SendMessageActionType, StateType} from "./state";

export const SendMessageAC = (message: string): SendMessageActionType => {
    return {
        text: "SEND-MESSAGE",
        message: message
    }
}

const dialogsPageReducer = (state: StateType, action: ActionTypes) => {

    switch (action.text) {
        case "SEND-MESSAGE":
            if (action.message) {
                let post: MessageType = {
                    message: action.message, // тут должен приходить message каким-то образом
                    id: 7,
                }
                state.dialogsPage.messagesData.push(post)
            }
            break;
        default:
            return state
    }
    return state
}
export default dialogsPageReducer