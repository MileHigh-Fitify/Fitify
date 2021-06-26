import React, { useState } from 'react'
import Styles from './navbar.module.css'
import { Link } from 'react-router-dom'
// import profilepic from '../../images/profilepic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {

    const [modal, setModal] = useState(false);

    return (
        <div className={Styles.majorContainer}>
            <div className={Styles.List}>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/workout" >Workout</Link></li>
                    <li><Link to="/nutrition" >Nutrition</Link></li>
                    <li><Link to="/shop" >Shop</Link></li>
                    <li><Link to="/Contactus" >Contact us</Link></li>
                    <li><Link to="/home" >More..</Link></li>
                </ul>
            </div>
            <div className={Styles.ListM}>
                <div className={Styles.iconContainer}>
                    <FontAwesomeIcon icon={faBars} onClick={() => { setModal(true) }} />
                </div>
                <AnimatePresence exitBeforeEnter>
                    {
                        modal &&

                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                        >
                            <li><Link to="/home" onClick={() => { setModal(false) }}>Home</Link></li>
                            <li><Link to="/workout" onClick={() => { setModal(false) }} >Workout</Link></li>
                            <li><Link to="/nutrition" onClick={() => { setModal(false) }} >nutrition</Link></li>
                            <li><Link to="/Contactus" onClick={() => { setModal(false) }}>Contact us</Link></li>
                            <li><Link to="/home" onClick={() => { setModal(false) }} >More..</Link></li>
                        </motion.ul>
                    }
                </AnimatePresence>
            </div>
            {/* <div className={Styles.acct}>
                <div>Hi Arnav!</div>
                <img src={profilepic} alt="" />
            </div> */}

        </div>
    )
}

export default Navbar