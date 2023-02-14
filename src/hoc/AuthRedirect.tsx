import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import profile from "../components/Profile/Profile";

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

type mapStateToPropsType = {
    isAuth: boolean
}

export function AuthRedirect <T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsType) => {

        const {isAuth, ...restProps} = props;

        if(!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }


    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)


    return ConnectedRedirectComponent
};

