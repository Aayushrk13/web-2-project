import styles from "./index.module.css";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Searchbar({userinfo,loggedin}){
    const navigate=useNavigate();
    const url="http://localhost/php/Search.php";
    const [destination,setdestination]=useState('');
    const [pickup,setpickup]=useState('');
    const [date,setdate]=useState(''); 
    const currentDate = new Date();
    const year = currentDate.getFullYear();        // Get the year
    const month = currentDate.getMonth() + 1;      // Get the month (0-indexed, so add 1)
    const day = currentDate.getDate();             // Get the day of the month
    const fulldate=`${year}-${month}-${day}`;   
    const currdate=new Date(fulldate);

    function handle_switch_click(){
        setdestination(pickup);
        setpickup(destination);
    }
    function pickupchange(e){
        setpickup(e.target.value);
    }
    function destinationchange(e){
        setdestination(e.target.value);
    }
    function handledateselect(e){
        const seldate=new Date(e.target.value);
        if(seldate>currdate){
            setdate(e.target.value);
            return;
        }
    }
    function handlesubmit(){
        if(pickup==''||destination==''||date==''){
            alert("Do not leave empty field in the searchbar.");
            return;
        }
        const fdata=new FormData();
        fdata.append('destination',destination);
        fdata.append('pickup',pickup);
        fdata.append('startdate',date);
        axios.post(url,fdata)
        .then(response=>handleresponse(response))
        .catch(response=>alert(response))
    }
    const handleresponse=(response)=>{
        navigate("/searchresult",{state:{searchdata:response.data,pageinfo:userinfo,loggedin:loggedin}});
    }
    return(
        <>
            <div className={styles.searchbar} >
                <div className={styles.form} >
                    <input type="text" placeholder="Pickup" value={pickup} onChange={pickupchange}/>
                    <div className={styles.btn} onClick={handle_switch_click}><HiOutlineSwitchHorizontal/></div>       
                    <input type="text" placeholder="Destination" value={destination} onChange={destinationchange}/>
                    <input type="date" onChange={(e)=>handledateselect(e)} value={date}/>
                    <button  onClick={handlesubmit} className={styles.btn}>Submit</button>
                </div>
            </div>
        </>
    );
}

export default Searchbar;