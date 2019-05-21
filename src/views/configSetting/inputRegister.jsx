import React, { Component, useState } from 'react';

import axios from 'axios'

import { Redirect, NavLink } from 'react-router-dom'
import Register from '../auth/register';

class InputRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data_recived: this.props.the_data
        }
        console.log(this.state.data_recived);
    }




    render() {
        return (

            <div>

            </div>

        )
    }

}

export default InputRegister;