export type StateType = {
    dialogsPage: {
        messagesData: Array<MessageType>,
        dialogsData: Array<DialogType>,
    },
    profilePage: {
        postsData: Array<PostType>,
    }
}

export type PostType = {
    message: string
    id: number
    likes: number
}

export type DialogType = {
    name: string
    id: number
}

export type MessageType = {
    message: string
    id: number
}

export type StoreType = {
    _state: StateType
    subscribe: (observer: (store: StoreType) => void) => void
    _rerenderEntireTree: (store: StoreType) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

export type ActionType = {
    text: "ADD-POST"
    message?: string
}

let store: StoreType = {
    _state: {
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
                {message: '3', id: 3, likes: 2},
                {message: '4!!!!', id: 4, likes: 4},
                {message: '555', id: 5, likes: 11},
            ],
        }
    },
    subscribe(callback: (store: StoreType) => void) {
        console.log('subscribe вызвалась')
        this._rerenderEntireTree = callback
    },
    getState(): StateType {
        return this._state
    },

    dispatch(action: ActionType) {
        if (action.text === 'ADD-POST') {
            if (action.message) {
                let post: PostType = {
                    message: action.message, // тут должен приходить message каким-то образом
                    id: 7,
                    likes: 0
                }
                this._state.profilePage.postsData.push(post)
                this._rerenderEntireTree(store)
            }
        }
    },

    // addPost(message: string) {
    //         let post: PostType = {
    //             message: '', // тут должен приходить message каким-то образом
    //             id: 7,
    //             likes: 0
    //         }
    //         this._state.profilePage.postsData.push(post)
    //         this._rerenderEntireTree(store)
    // },


    _rerenderEntireTree(store: StoreType) {
        console.log('changed')
    }
}


export default store