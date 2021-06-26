import React, { useState } from 'react'
import Styles from './ChangePlan.module.css'
import food from '../../../images/nutrition/food2.png'

const ChangePlan = ()=>{


    const [type, setType] = useState("fatloss");
    const [sort, setSort] = useState("veg");
    const [times, setTimes] = useState(3);

    const s={
        border: "2px solid #5a64c5",
        color: "#5a64c5"
    }
    const f={
        border: "2px solid #bcb5b5",
        color: "#000"
    }


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
                        <div className={Styles.card} style={(type.localeCompare("fatloss") === 0)? {"backgroundColor":"#1F2024"}:{"backgroundColor":"#5a64c5"}} onClick={()=>{setType("fatloss")}}>
                            <img src={food} />
                            <h3>Fat loose</h3>
                        </div>
                        <div className={Styles.card} style={(type.localeCompare("weightgain") === 0)? {"backgroundColor":"#1F2024"}:{"backgroundColor":"#5a64c5"} } onClick={()=>{setType("weightgain")}}>
                            <img src={food} />
                            <h3>Weight Gain</h3>
                        </div>
                        <div className={Styles.card} style={(type.localeCompare("keto") === 0)? {"backgroundColor":"#1F2024"}:{"backgroundColor":"#5a64c5"} } onClick={()=>{setType("keto")}}>
                            <img src={food} />
                            <h3>Keto Diet</h3>
                        </div>
                    </div>
                </div>
                <div className={Styles.filter}>
                    <div className={Styles.list}>
                        <div className={Styles.head1}>
                            <h3>2.Foods</h3>
                        </div>
                        <div className={Styles.item} style={(sort.localeCompare("veg") === 0)? s:f} onClick={()=>{setSort("veg")}}>
                            <h3>Vegeterian</h3>
                        </div>
                        <div className={Styles.item} style={(sort.localeCompare("nonveg") === 0)? s:f} onClick={()=>{setSort("nonveg")}}>
                            <h3>Non Vegeterian</h3>
                        </div>
                        <div className={Styles.item} style={(sort.localeCompare("egg") === 0)? s:f} onClick={()=>{setSort("egg")}}>
                            <h3>Eggeterian</h3>
                        </div>
                    </div>
                    <div className={Styles.list}>
                        <div className={Styles.head1}>
                            <h3>2.Times Per Day</h3>
                        </div>
                        <div className={Styles.item} style={(times == 3)? s:f} onClick={()=>{setTimes(3)}}>
                            <h3>3</h3>
                        </div>
                        <div className={Styles.item}  style={(times == 4)? s:f} onClick={()=>{setTimes(4)}}>
                            <h3>4</h3>
                        </div>
                        <div className={Styles.item}  style={(times == 5)? s:f} onClick={()=>{setTimes(5)}}>
                            <h3>5</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div className={Styles.foot}>
                <div className={Styles.button}>
                    Custom diet
                </div>
                <div className={Styles.button}>
                    create diet
                </div>
            </div>

        </div>
    )
}

export default ChangePlan;