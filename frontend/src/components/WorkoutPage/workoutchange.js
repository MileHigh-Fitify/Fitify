import React from 'react'
import Styles from './ChangeworkoutPlan.module.css'
import card1 from '../../images/workout/running.png'

const ChangeworkoutPlan = () => {
    return (
        <div className={Styles.majorContainer}>
            <div className={Styles.Header}>
                <h3>Select A Workout Plan</h3>
            </div>
            <div className={Styles.main}>
                <div className={Styles.type}>
                    <div className={Styles.head}>
                        <h3>1.Workout Type</h3>
                    </div>
                    <div className={Styles.cardCtn}>
                        <div className={Styles.card}>
                            <img src={card1} />
                            <h3>Weight Training</h3>
                        </div>
                        <div className={Styles.card}>
                            <img src={card1} />
                            <h3>No Equipment Cardio</h3>
                        </div>
                        <div className={Styles.card}>
                            <img src={card1} />
                            <h3>Sprint & Feild Exercises</h3>
                        </div>
                    </div>
                </div>
                <div className={Styles.filter}>
                    <div className={Styles.list}>
                        <div className={Styles.head}>
                            <h3>2.Difficulty</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>Begginer</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>Intermediate</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>Advanced</h3>
                        </div>
                    </div>
                    <div className={Styles.list}>
                        <div className={Styles.head}>
                            <h3>3. Duration</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>0-10 mins</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>10-20 mins</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>30-45 mins</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>45 -60mins</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>2500kcal</h3>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ChangeworkoutPlan;