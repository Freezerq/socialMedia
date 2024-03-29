import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginForm from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginReduxForm from "./components/Login/Login";
import Login from "./components/Login/Login";



function App() {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route
                        exact path='/dialogs'
                        render={() => <DialogsContainer/>}
                    />

                    <Route
                        path='/profile/:userId?'
                        render={() => <ProfileContainer />}
                    />

                    <Route
                        exact path='/users'
                        render={() => <UsersContainer />}
                    />

                    <Route
                        exact path='/login'
                        render={() => <Login />}
                    />

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
