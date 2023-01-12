import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType
}

function App({store}: AppPropsType) {

    const state = store.getState()

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path='/dialogs'
                           render={() => <Dialogs state={state.dialogsPage} dispatch={store.dispatch.bind(store)}/>}/>
                    <Route exact path='/profile'
                           render={() => <Profile dispatch={store.dispatch.bind(store)} postsData={state.profilePage.postsData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
