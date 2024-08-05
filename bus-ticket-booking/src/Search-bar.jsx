import styles from "./index.module.css";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { useState } from "react";
function Searchbar(){
    const [destination,setdestination]=useState('');
    const [pickup,setpickup]=useState('');
    function handle_switch_click(){
        setdestination(des=>pickup);
        setpickup(pic=>destination);
    }
    function pickupchange(e){
        setpickup(e.target.value);
    }
    function destinationchange(e){
        setdestination(e.target.value);
    }
    return(
        <>
            <div className={styles.searchbar}>
                <div className={styles.form} >
                    <input type="text" placeholder="Pickup" value={pickup} onChange={pickupchange}/>
                    <button className={styles.btn} onClick={handle_switch_click}><HiOutlineSwitchHorizontal/></button>       
                    <input type="text" placeholder="Destination" value={destination} onChange={destinationchange}/>
                    <input type="date"/>
                    <button  className={styles.btn}>Submit</button>
                </div>
            </div>
        </>
    );
}

export default Searchbar;