import React from 'react'
import Styles from './meditionhome.module.css'
import Navbar from '../NavBar/Navbar'
import medition from '../../images/medition/Meditation.png'


function Meditionhome() {
    return (
        <div>
            <div className={Styles.majorContainer}>
                <Navbar />
                <div className={Styles.main}>

                    <img className={Styles.medition} src={medition} alt="medition" />
                    <div class={Styles.para}>
                        <h1 className={Styles.head}>Keep Kalm!</h1>
                        <p className={Styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Error laboriosam veniam harum beatae placeat voluptatum expedita
                            explicabo omnis vel cum blanditiis, corporis, magni praesentium quam
                            temporibus eaque nemo fugiat doloremque.
                        </p>
                        <input class={Styles.duration} type="text" placeholder="Enter Duration" />
                        <button className={Styles.button} >Start Medition</button>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Meditionhome


