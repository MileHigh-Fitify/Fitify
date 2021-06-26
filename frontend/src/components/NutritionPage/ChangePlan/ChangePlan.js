import React from 'react'
import Styles from './ChangePlan.module.css'
import food from '../../../images/nutrition/food2.png'

const ChangePlan = ()=>{
    return(
        <div className={Styles.majorContainer}>
            <div className={Styles.Header}>
                <h3>Select A Nutrition Plan</h3>
            </div>
            <div className={Styles.main}>
                <div className={Styles.type}>
                    <div className={Styles.head}>
                        <h3>1.Diet Type</h3>
                    </div>
                    <div className={Styles.cardCtn}>
                        <div className={Styles.card}>
                            <img src={food} />
                            <h3>Fat loose</h3>
                        </div>
                        <div className={Styles.card}>
                            <img src={food} />
                            <h3>Weight Gain</h3>
                        </div>
                        <div className={Styles.card}>
                            <img src={food} />
                            <h3>Keto Diet</h3>
                        </div>
                    </div>
                </div>
                <div className={Styles.filter}>
                    <div className={Styles.list}>
                        <div className={Styles.head}>
                            <h3>2.Foods</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>Vegeterian</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>Non Vegeterian</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>Eggeterian</h3>
                        </div>
                    </div>
                    <div className={Styles.list}>
                        <div className={Styles.head}>
                            <h3>2.Kcal Per Day</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>2500kcal</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>2500kcal</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>2500kcal</h3>
                        </div>
                        <div className={Styles.item}>
                            <h3>2500kcal</h3>
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

export default ChangePlan;