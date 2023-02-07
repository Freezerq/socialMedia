import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileUserType, setProfileUserAC} from "../../redux/profilePageReducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getProfileThunkCreator} from "../../redux/usersPageReducer";

class ProfileContainer extends React.Component<UserContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile profile={this.props.profile}/>
    }
}

type mapStateToPropsType = {
    profile: ProfileUserType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getProfile: (userId: string) => void
}

export type UserContainerPropsType = mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<PathParamsType>

type PathParamsType = {
    userId: string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.authReducer.isAuth

    }
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile: getProfileThunkCreator})(WithUrlDataContainerComponent);