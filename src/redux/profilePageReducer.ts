import {PostType} from "./state";
import {ActionTypes} from "./redux-store";

export const AddPostAC = (message: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        message: message
    }
}



export type AddPostActionType = {
    type: "ADD-POST"
    message: string
}

export type profilePageInitialStateType = {
    postsData: Array<PostType>
}

const initialState = {
    postsData: [
        {message: 'Hi Dimon', id: 1, likes: 1},
        {message: '2 Post', id: 2, likes: 6},
        {message: '3', id: 3, likes: 2},
        {message: '4!!!!', id: 4, likes: 4},
        {message: '555', id: 5, likes: 11},
    ],
}

const profilePageReducer = (state: profilePageInitialStateType = initialState , action: ActionTypes):profilePageInitialStateType  => {
    switch (action.type) {
        case "ADD-POST":
            if (action.message) {
                return {
                    ...state,
                    postsData: [...state.postsData, {message: action.message, id: 7, likes: 0}]
                }
            }
    }
    return state
}

export default profilePageReducer