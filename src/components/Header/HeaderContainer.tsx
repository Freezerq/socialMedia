import React from 'react';
import Header from "./Header";
import {AuthInitialStateType, isLoggedInThunkCreator, loginTC, logOutTC, setUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";



class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.loggingIn()
    }


    render() {
        return <Header headerPage={this.props.headerPage} setUsers={this.props.setUsers} loggingIn={this.props.loggingIn} logOut={this.props.logOut}/>
    }

}
type HeaderMapStateToProps = {
    headerPage: AuthInitialStateType
}

type HeaderMapDispatchToProps = {
    setUsers: (data: { id: number, login: null|string, email: null|string }, messages: Array<any>) => void
    loggingIn: () => void
    logOut: () => void
}

export type HeaderPropsType = HeaderMapDispatchToProps & HeaderMapStateToProps

const mapStateToProps = (state: AppStateType): HeaderMapStateToProps => {
    return {
        headerPage: state.authReducer
    }
}
export default connect(mapStateToProps, {setUsers: setUserDataAC, loggingIn: isLoggedInThunkCreator,
logOut: logOutTC
})  (HeaderContainer)