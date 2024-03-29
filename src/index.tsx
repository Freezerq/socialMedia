import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";

//
// let rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
       <Provider store={store}>
           <App />
       </Provider>,
        document.getElementById('root')
    );
// }


// rerenderEntireTree(store.getState())
// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })