import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionTypes, StoreType} from "./redux/state";
import Profile from "./components/Profile/Profile";


type AppPropsType = {
    store: any
}

function App({store}: AppPropsType) {



    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route
                        exact path='/dialogs'
                        render={() => <DialogsContainer store={store}/>}
                    />

                    <Route
                        exact path='/profile'
                        render={() => <Profile store={store}/>}
                    />

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
