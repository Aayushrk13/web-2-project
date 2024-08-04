import styles from "./index.module.css";
import { useState } from "react";
function Searchbar(){
    const [date,setdate]=useState('');
    const currdate=new Date;
    return(
        <>
            <div className={styles.searchbar}>
                <form action="" className={styles.form} onSubmit={console.log("hellow")}>
                    <input type="text" placeholder="Pickup"></input>
                    <input type="text" placeholder="Destination"/>
                    <input type="date" />
                    <button  className={styles.btnsubmit}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Searchbar;