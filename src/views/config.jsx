import React, { useState } from 'react';

import './config.css';
import axios from 'axios';
import Login from './auth/login.jsx';
import RegisterConfig from './configSetting/Register.jsx'
import { Redirect, NavLink, Link } from 'react-router-dom';

const Config = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState(localStorage.getItem('Authorization') || '')
    const [userId, setUserId] = useState(localStorage.getItem('user_id') || '')
    const [userName, setUserName] = useState('');
    const [wich_section, setWich_section] = useState('');

    console.log(token);

    if (token) {

        axios.post("http://127.0.0.1:8000/api/check_user", { token, userId }).then(res => {


            console.log(res.data);
            setEmail(res.data.email);
            setUserName(res.data.name);
        }).catch(err => {
            console.log(err);
        });




    } else {
        return <Redirect to='/login' component={Login} exact />
    }

    const show_register = () => {
        setWich_section(<RegisterConfig></RegisterConfig>)

    }

    return (


        <div className="config_main_div">
            <div id="cssmenu2">
                <ul>
                    <li class="active"><Link onClick={() => show_register()} to="#"><i class="fa fa-fw fa-user-plus"></i> Register</Link></li>
                </ul>
            </div>

            <span> Welcome {userName ? userName : "loading"} </span>


            {wich_section ? wich_section : "Select section to edit"}

        </div >

    )



}

export default Config;