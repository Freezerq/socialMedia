import './index.css';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from "./redux/state";


let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    );
}


rerenderEntireTree(state)
subscribe(rerenderEntireTree)