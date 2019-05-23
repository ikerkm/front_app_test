import React, { Component, useState } from 'react';

import axios from 'axios'
import './registerconfig.css'
import { Redirect, NavLink } from 'react-router-dom'
import Register from '../auth/register';
import InputRegister from './inputRegister';
class RegisterConfig extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data_form: ''
        }
    }
    componen
    componentDidMount() {

        axios.get("http://127.0.0.1:8000/api/get_register_form").then(res => {

            this.setState({
                data_form: res.data,
            });

        }).catch(err => {
            console.log(err);
        });


    }


    RegisterConfigConstructor() {
        let form_inputs = [];
        // console.log(Object.keys(this.state.data_form.data[0]))
        //const data_position = this.state.data_form.data[0]
        // let key_unique = Object.keys(data_position)[0]
        //  let key_length = Object.keys(data_position)
        //   console.log(key_length.length);
        //    console.log(this.state.data_form.data[0][key_unique])
        for (let i = 0; i < this.state.data_form.data.length; i++) {

            let data_inside = [];
            const data_position = this.state.data_form.data[i]
            let key_length = Object.keys(data_position)
            for (let y = 0; y < key_length.length; y++) {
                if (key_length[y] === "type") {

                    data_inside.push(<input className="input100" type="text" name="" placeholder={data_position[key_length[y]]} />);
                } else {
                    data_inside.push(<span className="register_info">{key_length[y]}->{data_position[key_length[y]]}||| </span>);
                }

                //  data_inside.push(<span className="register_info">{key_length[y]}->{data_position[key_length[y]]}||| </span>);
                //
                // data_inside += <InputRegister the_data={data_position} ></InputRegister>
            }

            //  let key_unique = Object.keys(data_position)[0]

            form_inputs.push(data_inside);

            //form_inputs.push = <div><label>{this.state.data_form[i]}</label>   </div>


        }

        return form_inputs;
    }
    render() {
        return (

            <div className="registerconfigdiv">
                {this.state.data_form ? this.RegisterConfigConstructor().map(function (objects) { return <div className="inputContent"> {objects}</div> }) : "Loading"}
                <input type="button" value="Add new input"></input>
            </div>

        )
    }

}
/*const RegisterConfig = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState(localStorage.getItem('Authorization') || '')
    const [userId, setUserId] = useState(localStorage.getItem('user_id') || '')
    const [userName, setUserName] = useState('');
    const [data_form, setDataForm] = useState('');




    axios.get("http://127.0.0.1:8000/api/get_register_form").then(res => {


        console.log(res.data);
        setDataForm(res.data);
    }).catch(err => {
        console.log(err);
    });


    function RegisterConfigConstructor() {
        console.log("building")
    }

    return (


        <div>
            {data_form ? RegisterConfigConstructor() : "Loading"}
        </div>

    )



}*/

export default RegisterConfig;