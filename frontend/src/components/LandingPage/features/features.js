import React from 'react'
import './feature.css'
import feature1 from '../../../images/nutrition.png'
import feature2 from '../../../images/workoutstraightplan.png'
import feature3 from '../../../images/ecommerceshop.png'
import feature4 from '../../../images/trainerSelection.png'


function Features() {
    return (
        <div className="feature">


            <div>
                <h1 className="feature-h"> Exciting Features </h1>
                <p className="feature-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="d">
                <div class="one"><img className="pic" src={feature1} alt="" /></div>
                <div class="two"><img className="pic" src={feature2} alt="" /></div>
                <div class="one"><img className="pic" src={feature3} alt="" /></div>
                <div class="two"><img className="pic" src={feature4} alt="" /></div>
            </div>

        </div>

    )
}

export default Features
