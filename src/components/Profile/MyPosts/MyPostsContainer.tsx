import React, {ChangeEvent, useState} from 'react';
import Post from "./Post/Post";
import {ActionTypes, PostType, StoreType} from "../../../redux/state";
import {AddPostAC} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";


type MyPostsContainerPropsType = {
    store: StoreType
}

const MyPostsContainer = ({store}: MyPostsContainerPropsType) => {

    let [textAreaInput, setTextAreaInput] = useState<string>('')

    const textAreaOnChange = (text: string) => {
        setTextAreaInput(text)
    }

    const onClick = (text: string) => {
        if (text.trim()) {
            store.dispatch(AddPostAC(text))
        }
        else {
            alert('Пустое сообщение нельзя добавить')
        }
    }



    return (
        <MyPosts
            onClick={onClick}
            postsData={store.getState().profilePage.postsData}
            setTextAreaInput={setTextAreaInput}
            textAreaInput={textAreaInput}
            onChange={textAreaOnChange}
        />
    );
};

export default MyPostsContainer;