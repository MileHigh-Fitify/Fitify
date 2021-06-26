import React from 'react'
import Styles from './meditionhome.module.css'
import Navbar from '../NavBar/Navbar'
import Slider from "@material-ui/core/Slider";
import medition from '../../images/medition/Meditation.png'


function Medition() {
    const marks = [
        {
            value: 0,
            label: "0 sec"
        },

        {
            value: 100,
            label: "100 sec"
        }
    ];
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

                        <button className={Styles.button} >Pause</button>
                        <button className={Styles.Stop} >Stop</button>
                        <h6 className={Styles.time}></h6>
                        <Slider className={Styles.slider}
                            defaultValue={20}
                            // getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-custom"
                            // step={10}
                            // valueLabelDisplay="auto"
                            marks={marks}
                        />
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Medition
