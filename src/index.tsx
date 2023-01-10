import './index.css';
import store, {StateType, StoreType} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)