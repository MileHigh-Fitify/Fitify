
import React, { useState, useEffect } from 'react';
import Styles from './signup.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faPhone, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import axios from 'axios';


function Signup() {
    const [Username, setUsername] = useState("")
    const [phoneno, setphoneno] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")

    // useEffect(() => {
    //     console.log(User)
    // }, [User])
    const Submit = (e) => {
        e.preventDefault();
        var details = {
            username: Username,
            email: email,
            phoneno: phoneno,
            password: password,
            cpassword: cpassword
        }
        console.log(details)
        axios.post('http://localhost:5000/user/signup', details)
            .then(res => {
                window.alert(res.data)
            });



    }



    return (
        <div className={Styles.main}>
            <div className={Styles.container}>

                <h1>Signup</h1>
                <form className={Styles.fom}>
                    <div className={Styles.cnt}>
                        <FontAwesomeIcon icon={faUser} className={Styles.contact} />
                        <input type="textfield" className={Styles.name} placeholder="Enter Full Name"
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }} />

                    </div>
                    <div className={Styles.cnt}>
                        <FontAwesomeIcon icon={faPhone} className={Styles.contact} />
                        <input type="number" className={Styles.phoneno} placeholder="Phone no"
                            onChange={(e) => {
                                setphoneno(e.target.value)
                            }} />
                    </div>

                    <div className={Styles.cnt1}>
                        <FontAwesomeIcon icon={faVoicemail} className={Styles.contact} />
                        <input type="textfield" className={Styles.email} placeholder="Email" onChange={(e) => {
                            setemail(e.target.value)
                        }} />
                    </div>

                    <div className={Styles.cnt} >
                        <FontAwesomeIcon icon={faLock} className={Styles.contact} />
                        <input type="password" placeholder="Password" onChange={(e) => {
                            setpassword(e.target.value)
                        }} />
                    </div>

                    <div className={Styles.cnt}>
                        <FontAwesomeIcon icon={faLock} className={Styles.contact} />
                        <input type="password" placeholder="Conform Password" onChange={(e) => {
                            setcpassword(e.target.value)
                        }} />
                    </div>

                    <div className={Styles.bbttnn} onClick={Submit}><button>Signup</button></div>
                    <h6>Already Have Account? <Link to="/login"><span>Log In</span></Link></h6>
                </form>


            </div>
        </div >
    )
}

export default Signup
