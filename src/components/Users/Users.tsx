import React from 'react';
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import avatar from '../../images/ava.png'

export const Users = (props: UsersPropsType) => {
    // не стал тут пока ничего делать, тк придётся менять типы 99%, когда начнём делать запросы на серв

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
                props.set(response.data.items)
            })
        }
    }

    return <div>
        <button onClick={getUsers}>Get them all</button>
        {props.users.map(u => <div>
            <div><img src={u.photos.small !== null? u.photos.small : avatar} alt="Фото профиля"/></div>
            <div>{u.name}</div>
        </div>)}
    </div>
}