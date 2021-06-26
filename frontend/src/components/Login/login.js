import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Styles from './login.module.css'
import food from '../../images/food.png'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className={Styles.main}>
            <div className={Styles.container}>
                <img src={food} alt="food"></img>
                <h1>Welcome Back!</h1>
                <form className={Styles.form}>

                    <div className={Styles.fiels}>
                        <FontAwesomeIcon icon={faVoicemail} className={Styles.contact} />
                        <input type="textfield" className={Styles.email} placeholder="Email" />
                    </div>

                    <div className={Styles.fiels}>
                        <FontAwesomeIcon icon={faLock} className={Styles.password} />
                        <input type="password" placeholder="Password" />
                    </div>



                    <h6 className={Styles.Fpass}>Forgot Password?</h6>
                    <div><button className={Styles.login}>Login</button></div>
                    <h6 className={Styles.h6}>Dont Have Account? <Link to="/signup"><span>Sign Up</span></Link></h6>
                </form>


            </div>
        </div>
    )
}

export default Login
