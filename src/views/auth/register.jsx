import React, { useState } from 'react';
import './login.css'
import axios from 'axios'
import { validate } from '@babel/types';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email_already, setEmail_already] = useState('');
    const [email_info, setEmail_info] = useState('');
    const [mail_checker, setMail_checker] = useState('');
    function start_register(e) {
        console.log(email);
        console.log("hey")
        axios.post("http://127.0.0.1:8000/api/save_user", { name, email, password }).then(res => {
            /*  localStorage.setItem('Authorization', res.headers.authorization);
              console.log(localStorage.getItem('Authorization'));
              
          */
            console.log(res.data.status, res.data.name, res.data.email);
        }).catch(err => {

        });
    }

    function check_mail() {
        setMail_checker(validateEmail(email));

        if (mail_checker) {

            axios.post("http://127.0.0.1:8000/api/get_users_already", { email }).then(res => {

                console.log(res.data.exist);
                setEmail_already(res.data.exist);

            }).catch(err => {

            });


        } else {
            setEmail_info('Insert valid email direction.')
        }
        console.log(email);

        console.log(email_info);

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
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" onChange={(e) => setName(e.target.value)} name="name" placeholder="Name" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <span>

                                {email_already ? "valid mail" : "not valid"}

                            </span>
                            <input className="input100" type="text" onChange={(e) => setEmail(e.target.value)} onBlur={() => check_mail()} name="email" placeholder="Email" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" onChange={(e) => setPassword(e.target.value)} name="pass" placeholder="Password" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>

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