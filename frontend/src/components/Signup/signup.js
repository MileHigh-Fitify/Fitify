
import React from 'react';
import Styles from './signup.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faPhone, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


function Signup() {
    return (
        <div className={Styles.main}>
            <div className={Styles.container}>

                <h1>Signup</h1>
                <form className={Styles.fom}>
                    <div className={Styles.cnt}>
                        <FontAwesomeIcon icon={faUser} className={Styles.contact} />
                        <input type="textfield" className={Styles.name} placeholder="Enter Full Name" />
                    </div>
                    <div className={Styles.cnt}>
                        <FontAwesomeIcon icon={faPhone} className={Styles.contact} />
                        <input type="textfield" className={Styles.phoneno} placeholder="Phone no" />
                    </div>

                    <div className={Styles.cnt1}>
                        <FontAwesomeIcon icon={faVoicemail} className={Styles.contact} />
                        <input type="textfield" className={Styles.email} placeholder="Email" />
                    </div>

                    <div className={Styles.cnt} >
                        <FontAwesomeIcon icon={faLock} className={Styles.contact} />
                        <input type="password" placeholder="Password" />
                    </div>

                    <div className={Styles.cnt}>
                        <FontAwesomeIcon icon={faLock} className={Styles.contact} />
                        <input type="password" placeholder="Conform Password" />
                    </div>

                    <div className={Styles.bbttnn}><button>Signup</button></div>
                    <h6>Already Have Account? <Link to="/login"><span>Log In</span></Link></h6>
                </form>


            </div>
        </div >
    )
}

export default Signup
