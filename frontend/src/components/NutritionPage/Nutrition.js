import React from 'react'
import Styles from '../NutritionPage/Nutrition.module.css'
import Navbar from '../NavBar/Navbar'
import Progress from '../common/progress/Progress'
import food1 from '../../images/nutrition/foodpic.png'
import food2 from '../../images/nutrition/foodpic1.png'
import water from '../../images/keyfeatures/water.png'
import shop from '../../images/keyfeatures/shopping-cart.png'
import Diet from './Diet/Diet'
import ChangePlan from './ChangePlan/ChangePlan'
import { Route, Switch } from 'react-router-dom'

const Nutrition = ()=>{
    return(
        <div className={Styles.majorContainer}>
            <Navbar />
            <Switch>
                <Route exact path="/nutrition/">
                    <div className={Styles.main}>
                        <div className={Styles.info}>
                            <Progress />
                            <div className={Styles.mealNav}>
                                <div className={Styles.mealPlan}>
                                    <div>
                                        <img src={food1} />
                                    </div>
                                    <div>
                                        <h3>Today's Meal Plan</h3>
                                        
                                    </div>                            
                                </div>
                                <div className={Styles.mealPlan}>
                                    <div>
                                        <img src={food2} />
                                    </div>
                                    <div>
                                        <h3>Next Meal</h3>
                                        <h4>300 gm chicken & Rice</h4>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className={Styles.mealNav}>
                                <div className={Styles.water}>
                                    <div className={Styles.img}>
                                        <img src={water} />
                                    </div>
                                    <div className={Styles.details}>
                                        <h3>Glasses of water taken</h3>
                                        <h4>3/14 Glasses</h4>
                                    </div>                            
                                </div>
                                <div className={Styles.mealPlan}>
                                    <div className={Styles.img}>
                                        <img src={shop} />
                                    </div>
                                    <div>
                                        <h3>Shop for Ingredients</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.diet}>
                            <Diet />
                        </div>

                    </div>
                </Route>
                <Route path="/nutrition/change">
                        <ChangePlan />
                </Route>
            </Switch>
        </div>
    )
}

export default Nutrition