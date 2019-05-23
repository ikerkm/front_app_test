import React, { useState, Component, useEffect } from 'react';
import './login.css'
import axios from 'axios'
import { validate } from '@babel/types';

const Register = () => {
    const [dataForm, setDataForm] = useState('')
    useEffect(() => {




        axios.get("http://127.0.0.1:8000/api/get_register_form").then(res => {

            setDataForm(res.data);
        }).catch(err => {
            console.log(err);
        });





    }, []);


    const [email, setEmail] = useState('');
    const [email_already, setEmail_already] = useState('');
    const [email_info, setEmail_info] = useState('');
    const [mail_checker, setMail_checker] = useState('');
    let [data_to_send, setDataToSend] = useState(['a']);
    function start_register(e) {


        //    console.log(email);
        //     console.log("hey")
        //     axios.post("http://127.0.0.1:8000/api/save_user", { name, email, password }).then(res => {
        /*  localStorage.setItem('Authorization', res.headers.authorization);
          console.log(localStorage.getItem('Authorization'));
          
      */
        //       console.log(res.data.status, res.data.name, res.data.email);
        // }).catch(err => {

        //   });
        console.log(data_to_send);
    }

    function RegisterConfigConstructor(data) {

        let form_inputs = [];
        console.log(data)
        if (data) {
            for (let i = 0; i < data.data.length; i++) {

                let data_inside = [];
                const data_position = data.data[i]
                let key_length = Object.keys(data_position)


                for (let y = 0; y < key_length.length; y++) {

                    if (key_length[y] === "type") {

                        data_inside.push(<div className="wrap-input100 validate-input">
                            <input className="input100" type={data_position[key_length[y]]} onChange={(e) => save_data(e, data_position[key_length[0]])} name="name" placeholder={data_position[key_length[y - 1]]} />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>);
                    }
                }
                form_inputs.push(data_inside);
            }
            return form_inputs;
        } else {
        }
    }
    function save_data(e, data) {
        let something = data_to_send;
        let aux = something;
        let aux2 = false;
        console.log(aux, '1')
        for (let i = 0; i < something.length; i++) {
            console.log(aux, '2')
            let the_key = "";
            the_key = Object.keys(aux[i])
            console.log(the_key[0])
            if (Number(the_key[0]) == Number(data)) {
                console.log("coincide")
                aux[i] = { [data]: e.target.value }
                aux2 = false;
                break;
            } else {
                aux2 = true;
            }
        }
        if (aux2 == true) {
            aux.push({ [data]: e.target.value })
        }
        setDataToSend(aux)
    }
    function check_mail() {
        setMail_checker(validateEmail(email));
        if (mail_checker) {
            axios.post("http://127.0.0.1:8000/api/get_users_already", { email }).then(res => {
                setEmail_already(res.data.exist);
            }).catch(err => {

            });
        } else {
            setEmail_info('Insert valid email direction.')
        }

    }
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            Register
					</span>
                        {dataForm ? RegisterConfigConstructor(dataForm).map(function (objects) {
                            //  console.log(objects)
                            return <div className="inputContent"> {objects}</div>
                        }) : "Loading"}
                        <div className="container-login100-form-btn">
                            <input type="button" onClick={(e) => start_register()} value="Register"></input>
                        </div>
                        <div className="text-center p-t-12">
                            <span className="txt1">
                                Forgot
						</span>
                            <a className="txt2" href="#">
                                Username / Password?
						</a>
                        </div>
                        <div className="text-center p-t-136">
                            <a className="txt2" href="#">
                                Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;