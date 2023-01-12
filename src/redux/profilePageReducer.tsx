import {ActionTypes, AddPostActionType, MessageType, PostType, StateType} from "./state";

export const AddPostAC = (message: string): AddPostActionType => {
    return {
        text: "ADD-POST",
        message: message
    }
}

const profilePageReducer = (state: StateType, action: ActionTypes) => {
    switch (action.text) {
        case "ADD-POST":
            if (action.message) {
                let post: PostType = {
                    message: action.message,
                    id: 7,
                    likes: 0
                }
                state.profilePage.postsData.push(post)
            }
            break;
        default:
            return state
    }
    return state
}

export default profilePageReducer