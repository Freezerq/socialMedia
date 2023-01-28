import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    changePageAC,
    followAC,
    getTotalUsersCountAC,
    SetActionCreator, toggleIsFetchingAC, unFollowAC,
    UserType
} from "../../redux/usersPageReducer";

import axios from "axios";
import UsersFunctional from "./UsersFunctional";

class UsersAPIComponent extends React.Component<UsersPropsType> {

    spanOnClickHandler = (pageNumber: number) => {
        this.props.changePage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.toggleIsFetching(false)
            this.props.set(response.data.items)

        })
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.toggleIsFetching(false)
            this.props.set(response.data.items)
            this.props.getTotalUsersCount(response.data.totalCount)
        })
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
        />
    }
}

type UsersMapStateToProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type UsersMapDispatchToProps = {
    follow: (id: number) => void
    set: (users: Array<UserType>) => void
    changePage: (page: number) => void
    getTotalUsersCount: (total: number) => void
    unfollow: (id: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = UsersMapDispatchToProps & UsersMapStateToProps

const mapStateToProps = (state: AppStateType): UsersMapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
//
// const mapDispatchToProps = (dispatch: Dispatch): UsersMapDispatchToProps => {
//     return {
//         follow: (id: number) => {
//             dispatch(followAC(id))
//         },
//         set: (users: Array<UserType>) => {
//             dispatch(SetActionCreator(users))
//         },
//         changePage: (page: number) => {
//             dispatch(changePageAC(page))
//         },
//         getTotalUsersCount: (total: number) => {
//             dispatch(getTotalUsersCountAC(total))
//         },
//         unfollow: (id: number) => {
//             dispatch(unFollowAC(id))
//         },
//         toggleIsFetching: (toggleIsFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(toggleIsFetching))
//         }
//     }
// }


const UsersContainer = connect(mapStateToProps, {
        follow: followAC,
        set: SetActionCreator,
        changePage: changePageAC,
        getTotalUsersCount: getTotalUsersCountAC,
        unfollow: unFollowAC,
        toggleIsFetching: toggleIsFetchingAC
    })  (UsersAPIComponent)

export default UsersContainer;