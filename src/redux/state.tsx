import {rerenderEntireTree} from "../render";

export type PostType = {
    message: string
    id: number
    likes: number
}


export type dialogType = {
    name: string
    id: number
}

export type messageType = {
    message: string
    id: number
}

const addPost = (message: string) => {
    let post: PostType = {
        message: message,
        id: 7,
        likes: 0
    }
    state.profilePage.postsData.push(post)
    rerenderEntireTree(state)
    console.log('отрисовано ежжжжжи')
}


export type StateType = {
    dialogsPage: {
        messagesData: Array<messageType>,
        dialogsData: Array<dialogType>,
    },
    profilePage: {
        postsData: Array<PostType>,
        addPost: (message: string) => void
    }
}

let state: StateType = {
    dialogsPage: {
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
    },
    profilePage: {
        postsData: [
            {message: 'Hi Dimon', id: 1, likes: 1},
            {message: '2 Post', id: 2, likes: 6},
            {message: 'Thirdddddddddd', id: 3, likes: 2},
            {message: 'FOurht!!!!', id: 4, likes: 4},
            {message: 'ПЯТЬ ЁПТА', id: 5, likes: 11},
        ],
        addPost: addPost
    }
}



export default state