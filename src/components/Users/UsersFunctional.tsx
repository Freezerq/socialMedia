import React from 'react';
import classes from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";


type UsersFunctionalPropsType = UsersPropsType & {
    spanOnClickHandler: (pageNumber: number) => void
}

const UsersFunctional = (props: UsersFunctionalPropsType ) => {

    let pagesTotal = Math.ceil( props.totalUsersCount / props.pageSize)

    let arr = []
    for (let i = 1; i <= pagesTotal; i++) {
        arr.push(i)
    }


    return (

        <div>
            {arr.map(p => <span onClick={() => {props.spanOnClickHandler(p)}} className={props.currentPage === p? classes.selectedSpan : ''}>{p}</span>)}
            {props.users.map(u => <div>
                <div>{u.name}</div>
                <div>{u.followed? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button onClick={() => {props.follow(u.id)}}>follow</button>}</div>
            </div>)}
        </div>
    );
};

export default UsersFunctional;