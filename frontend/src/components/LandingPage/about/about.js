import React from 'react'
import './about.css'
import card1 from '../../../images/fitness.png'
import card2 from '../../../images/plan.png'
import card3 from '../../../images/shopping-cart.png'
import card4 from '../../../images/coin.png'
import bglogo from '../../../images/dumbbell2.png'

function About() {
    return (
        <div className="about">
            <img className="bg" src={bglogo} />
            <div>
                <h1 className="about-h"> Know About Fitify</h1>
                <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. <br /><br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="d-flex">
                <div class="card card1"><img className="fitness" src={card1} alt="" /><h1 className="h1-about">Workout</h1></div>
                <div class="card card2"><img className="plan" src={card2} alt="" /><h1 className="h1-about">Nutrition</h1></div>
                <div class="card card3"><img className="shoping-cart" src={card3} alt="" /><h1 className="h1-about">Shop</h1></div>
                <div class="card card4"><img className="coin" src={card4} alt="" /><h1 className="h1-about">Coin</h1></div>
            </div>

        </div>
    )
}

export default About
