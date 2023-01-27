import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    changePageAC,
    followAC,
    getTotalUsersCountAC,
    SetActionCreator, unFollowAC,
    UserType
} from "../../redux/usersPageReducer";

import axios from "axios";
import UsersFunctional from "./UsersFunctional";

class UsersAPIComponent extends React.Component<UsersPropsType> {
    // код снизу работает по умолчанию
    // constructor(props: UsersPropsType) {
    //     super(props);
    //
    // }
    spanOnClickHandler = (pageNumber: number) => {
        this.props.changePage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.set(response.data.items)
        })
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
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
        />
    }
}

type UsersMapStateToProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number

}

type UsersMapDispatchToProps = {
    follow: (id: number) => void
    set: (users: Array<UserType>) => void
    changePage: (page: number) => void
    getTotalUsersCount: (total: number) => void
    unfollow: (id: number) => void
}

export type UsersPropsType = UsersMapDispatchToProps & UsersMapStateToProps

const mapStateToProps = (state: AppStateType): UsersMapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}

const mapDispatchToProps = (dispatch: Dispatch):UsersMapDispatchToProps  => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        set: (users: Array<UserType>) => {
            dispatch(SetActionCreator(users))
        },
        changePage: (page: number) => {
            dispatch(changePageAC(page))
        },
        getTotalUsersCount: (total: number) => {
            dispatch(getTotalUsersCountAC(total))
        },
        unfollow: (id: number) => {
            dispatch(unFollowAC(id))
        },
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPIComponent)

export default UsersContainer;