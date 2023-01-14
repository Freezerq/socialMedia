import {ActionTypes, AddPostActionType, MessageType, PostType, StateType} from "./state";

export const AddPostAC = (message: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        message: message
    }
}

type profilePageInitialStateType = {
    postsData: Array<PostType>
}

let initialState = {
    postsData: [
        {message: 'Hi Dimon', id: 1, likes: 1},
        {message: '2 Post', id: 2, likes: 6},
        {message: '3', id: 3, likes: 2},
        {message: '4!!!!', id: 4, likes: 4},
        {message: '555', id: 5, likes: 11},
    ],
}

const profilePageReducer = (state: profilePageInitialStateType = initialState , action: any) => {
    switch (action.type) {
        case "ADD-POST":
            if (action.message) {
                let post: PostType = {
                    message: action.message,
                    id: 7,
                    likes: 0
                }
                state.postsData.push(post)
            }
            break;
        default:
            return state
    }
    return state
}

export default profilePageReducer