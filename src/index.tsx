import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {StateType, StoreType} from "./redux/state";


let rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})