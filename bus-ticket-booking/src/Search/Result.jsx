import styles from "./index.module.css";
import { useState } from "react";
import Seatbooking from "./Seatbooking";
export default function Result({props}){      //props:name,type,price,timing,Boarding point,destination,pickup, seatsleft
    return(
        <div className={styles.result}>
            <div className={styles.info}>
                <p className={styles.busname}>{props.busname}</p> 
                <p>Bus license plate no: {props.busid}</p>
                <p>{props.bustype}</p>
                <div className={styles.time}>
                    <div>
                        <p style={{fontWeight:"600"}}>{props.starttime}</p>
                        <p>{props.boardingpoint}</p>
                    </div>
                    <span style={{width:"100%",height:"25px",textAlign:"center",borderBottom:"1px dashed #2C3E50"}}>{props.duration} Hours </span>
                    <div>
                        <p style={{fontWeight:"600"}}>{props.endtime}</p>
                        <p>{props.destination}</p>
                    </div>
                </div>

            </div>
            <div className={styles.price}>
                <p>Per seat: NPR{props.price}</p>
                <br />
                <p>{props.seatsleft} seats are available</p>
            </div>

        </div>
    );
}