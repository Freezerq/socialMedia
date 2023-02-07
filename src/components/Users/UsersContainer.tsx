import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    changePageAC,
    followingInProgressAC, followThunkCreator,
    getTotalUsersCountAC, getUsersThunkCreator,
    setActionCreator, toggleIsFetchingAC, unFollowThunkCreator,
    UserType
} from "../../redux/usersPageReducer";
import UsersFunctional from "./UsersFunctional";


class UsersAPIComponent extends React.Component<UsersPropsType> {

    spanOnClickHandler = (pageNumber: number) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
        this.props.changePage(pageNumber)
    }

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }


    render() {
        return <UsersFunctional
            users={this.props.users}
            getTotalUsersCount={this.props.getTotalUsersCount}
            changePage={this.props.changePage}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            set={this.props.set}
            follow={this.props.follow}
            spanOnClickHandler={this.spanOnClickHandler}
            unfollow={this.props.unfollow}
            isFetching={this.props.isFetching}
            toggleIsFetching={this.props.toggleIsFetching}
            followingInProgress={this.props.followingInProgress}
            setFollowingInProgress={this.props.setFollowingInProgress}
            getUsersThunk={this.props.getUsersThunk}
        />
    }
}

type UsersMapStateToProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type UsersMapDispatchToProps = {
    follow: (id: number) => void
    set: (users: Array<UserType>) => void
    changePage: (page: number) => void
    getTotalUsersCount: (total: number) => void
    unfollow: (id: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    setFollowingInProgress: (followingInProgress: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = UsersMapDispatchToProps & UsersMapStateToProps

const mapStateToProps = (state: AppStateType): UsersMapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


const UsersContainer = connect(mapStateToProps, {
    set: setActionCreator,
    changePage: changePageAC,
    getTotalUsersCount: getTotalUsersCountAC,
    unfollow: unFollowThunkCreator,
    toggleIsFetching: toggleIsFetchingAC,
    setFollowingInProgress: followingInProgressAC,
    getUsersThunk: getUsersThunkCreator,
    follow: followThunkCreator
})(UsersAPIComponent)

export default UsersContainer;


