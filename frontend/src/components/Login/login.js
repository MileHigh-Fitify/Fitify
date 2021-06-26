import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Styles from './login.module.css'
import food from '../../images/food.png'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const login = (e) => {
        e.preventDefault()
        const logindetails = {
            email: email,
            password: password
        }
        console.log(logindetails)
        axios.post('http://localhost:5000/user/signin', logindetails)
            .then(res => {
                window.alert(res.data)
            });


    }
    return (
        <div className={Styles.main}>
            <div className={Styles.container}>
                <img src={food} alt="food"></img>
                <h1>Welcome Back!</h1>
                <form className={Styles.form}>

                    <div className={Styles.fiels}>
                        <FontAwesomeIcon icon={faVoicemail} className={Styles.contact} />
                        <input type="textfield" className={Styles.email} placeholder="Email"
                            onChange={(e) => {
                                setemail(e.target.value)
                            }} />
                    </div>

                    <div className={Styles.fiels}>
                        <FontAwesomeIcon icon={faLock} className={Styles.password} />

                        <input type="password" placeholder="Password"
                            onChange={(e) => {
                                setpassword(e.target.value)
                            }} />
                    </div>



                    <h6 className={Styles.Fpass}>Forgot Password?</h6>
                    <div><button className={Styles.login} onClick={login}>Login</button></div>
                    <h6 className={Styles.h6}>Dont Have Account? <Link to="/signup"><span>Sign Up</span></Link></h6>
                </form>


            </div>
        </div>
    )
}

export default Login
