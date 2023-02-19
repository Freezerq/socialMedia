import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunkCreator, getProfileStatusThunkCreator,
    ProfileUserType,
    setProfileStatusThunkCreator,
} from "../../redux/profilePageReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";

class ProfileContainer extends React.Component<UserContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.userId)
        }
        this.props.getStatus(String(userId))
        this.props.getProfile(String(userId))
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status} setStatus={this.props.setStatus}/>
    }
}

type mapStateToPropsType = {
    profile: ProfileUserType
    status: string
    userId: number
}

type mapDispatchToPropsType = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    setStatus: (status: string) => void
}

export type UserContainerPropsType = mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<PathParamsType>

type PathParamsType = {
    userId: string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.authReducer.data.id
    }
}



export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile: getProfileThunkCreator, getStatus: getProfileStatusThunkCreator,
        setStatus: setProfileStatusThunkCreator
    }),
    withRouter,
    AuthRedirect
)(ProfileContainer)