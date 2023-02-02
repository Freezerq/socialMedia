import React from 'react';
import Header from "./Header";
import axios from "axios";
import {AuthInitialStateType, setUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then((response) => {
            const data = {
                id: response.data.data.id,
                login: response.data.data.login,
                email: response.data.data.email,
            }
            const messages = response.data.messages
            this.props.setUsers(data, messages)
        })
    }


    render() {
        return <Header headerPage={this.props.headerPage} setUsers={this.props.setUsers}/>
    }

}
type HeaderMapStateToProps = {
    headerPage: AuthInitialStateType
}

type HeaderMapDispatchToProps = {
    setUsers: (data: { id: null|number, login: null|string, email: null|string }, messages: Array<any>) => void
}

export type HeaderPropsType = HeaderMapDispatchToProps & HeaderMapStateToProps

const mapStateToProps = (state: AppStateType): HeaderMapStateToProps => {
    return {
        headerPage: state.authReducer
    }
}
export default connect(mapStateToProps, {setUsers: setUserDataAC})  (HeaderContainer)