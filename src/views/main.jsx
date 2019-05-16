import React, { useState } from 'react';
import './auth/login.css'
import axios from 'axios'
import Login from './auth/login.jsx'
import { Redirect, NavLink } from 'react-router-dom'
const Main = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState(localStorage.getItem('Authorization') || '')
    const [userId, setUserId] = useState(localStorage.getItem('user_id') || '')
    console.log(token);
    if (token) {

        axios.post("http://127.0.0.1:8000/api/check_user", { token, userId }).then(res => {


            console.log(res.data)
        }).catch(err => {
            console.log(err);
        });




    } else {
        return <Redirect to='/login' component={Login} exact />
    }

    return (


        <div>
            <NavLink activeClassName={'is-active'} activeStyle={{ fontSize: '1.5em', color: 'green' }} to='/config' exact>Config</NavLink>
            <span> this is the main  </span>
        </div>

    )



}

export default Main;