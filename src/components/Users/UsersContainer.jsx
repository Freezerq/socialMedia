import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";



// не стал тут пока ничего делать, тк придётся менять типы 99%, когда начнём делать запросы на серв
const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer;