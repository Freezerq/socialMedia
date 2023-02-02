import React from 'react';
import classes from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import Preloader from "../common/Preloader/Preloader";
import avatar from "../../images/ava.png";
import {NavLink} from "react-router-dom";
import {followAPI, unFollowAPI} from "../../api/api";

type UsersFunctionalPropsType = UsersPropsType & {
    spanOnClickHandler: (pageNumber: number) => void
}

const UsersFunctional = (props: UsersFunctionalPropsType) => {

    let pagesTotal = Math.ceil(props.totalUsersCount / props.pageSize)

    let arr = []
    for (let i = 1; i <= pagesTotal; i++) {
        arr.push(i)
    }

    const unFollow = (userId: number) => {
        props.setFollowingInProgress(userId)
        unFollowAPI(userId).then(res => {
            if (res === 0) {
                props.unfollow(userId)
            }
            props.setFollowingInProgress(userId)
        })
    }


    const follow = (userId: number) => {
        props.setFollowingInProgress(userId)
        followAPI(userId).then(res => {
            if (res === 0) {
                props.follow(userId)
            }
            props.setFollowingInProgress(userId)

        })
    }

    return (
        <>
            {props.isFetching ? <Preloader/> : <div>
                {arr.map(p => <span onClick={() => {
                    props.spanOnClickHandler(p)
                }} className={props.currentPage === p ? classes.selectedSpan : ''}>{p}</span>)}
                {props.users.map(u => <div>
                    <div>{u.name}</div>
                    <div>
                        <NavLink to={'/profile' + `/${u.id}`}><img style={{width: '77px', height: '77px'}}
                                                                   src={u.photos.small !== null ? u.photos.small : avatar}
                                                                   alt="Фото профиля"/></NavLink>
                    </div>

                    <div>{u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        unFollow(u.id)
                    }}>Unfollow
                    </button> :

                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        follow(u.id)
                    }}>Follow
                        </button>}</div>
                </div>)}
            </div>}

        </>
    );
};

export default UsersFunctional;