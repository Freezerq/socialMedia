import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUserType, setProfileUserAC} from "../../redux/profilePageReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import exp from "constants";

class ProfileContainer extends React.Component<UserContainerPropsType> {

    componentDidMount() {
        // this.props.toggleIsFetching(true)
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
            // this.props.toggleIsFetching(false)

            let userProfile: ProfileUserType = {
                photos: response.data.photos,
                userId: response.data.userId,
                fullName: response.data.fullName,
                lookingForAJobDescription: response.data.lookingForAJobDescription
            }
            this.props.setProfileUser(userProfile)
            // this.props.getTotalUsersCount(response.data.totalCount)
        })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

type mapStateToPropsType = {
    profile: ProfileUserType
}

type mapDispatchToPropsType = {
    setProfileUser: (profile: ProfileUserType) => void
}

export type UserContainerPropsType = mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<PathParamsType>

type PathParamsType = {
    userId: string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}



let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileUser: setProfileUserAC})(WithUrlDataContainerComponent);