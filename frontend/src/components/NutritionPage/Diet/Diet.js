import React from 'react'
import Styles from './Diet.module.css'
import food1 from '../../../images/nutrition/food2.png'
import { Link } from 'react-router-dom'

const Diet=()=>{
    return(
        <div className={Styles.majorContainer}>
            <div className={Styles.header}>
                <h3>Nutrition Plan</h3>
                <div className={Styles.btnCtn}>
                    <Link to="/nutrition/change">
                        <span>Change Plan</span>
                    </Link>
                    <span>Workout Plan</span>                
                </div>
            </div>
            <div className={Styles.foodList}>
                <div className={Styles.food}>
                    <div className={Styles.img}>
                        <img src={food1} />
                    </div>
                    <div className={Styles.details}>
                        <h3>200gms of Fresh food</h3>
                        <h4>Breakfast - 120Kcal</h4> 
                        <input type="checkbox" />                       
                    </div>                    
                </div>
                <div className={Styles.food}>
                    <div className={Styles.img}>
                        <img src={food1} />
                    </div>
                    <div className={Styles.details}>
                        <h3>200gms of Fresh food</h3>
                        <h4>Breakfast - 120Kcal</h4> 
                        <input type="checkbox" />                       
                    </div>                    
                </div>
                <div className={Styles.food}>
                    <div className={Styles.img}>
                        <img src={food1} />
                    </div>
                    <div className={Styles.details}>
                        <h3>200gms of Fresh food</h3>
                        <h4>Breakfast - 120Kcal</h4> 
                        <input type="checkbox" />                       
                    </div>                    
                </div>

            </div>
        </div>
    )
}

export default Diet;