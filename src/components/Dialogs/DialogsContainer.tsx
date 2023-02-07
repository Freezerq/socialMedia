import React from 'react';
import {dialogsPageInitialStateType, SendMessageAC} from "../../redux/dialogsPageReducer";
import Dialogs from "./Message/Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";




type DialogsMapStateToPropsType = {
    dialogsPage: dialogsPageInitialStateType
    isAuth: boolean
}

type DialogsMapDispatchToPropsType = {
    sendMessage: (message : string) => void
}

export type DialogPropsType = DialogsMapStateToPropsType & DialogsMapDispatchToPropsType

const mapStateToProps = (state: AppStateType): DialogsMapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.authReducer.isAuth
    }
}



const mapDispatchToProps = (dispatch: Dispatch):DialogsMapDispatchToPropsType  => {
    return {
        sendMessage: (message: string) => {
            dispatch(SendMessageAC(message))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;