import "./success.css";
import { TiTick } from "react-icons/ti";
import Navbar from "../src/Nav-bar";
import { useEffect,useState } from "react";
export default function Success(){
    const [userinfo,setuserinfo]=useState({fullname:'',email:''});
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const fullname = queryParams.get('name');
        const email = queryParams.get('email');
        setuserinfo({ fullname, email });
    }, []);
    // const handlehome=()=>{
    //     navigate('/',{state:userinfo})
    // }
    return(
        <>
        <Navbar loggedin={true} userinfo={userinfo}></Navbar>
        <div className="container">
            <div className="successcircle"><TiTick></TiTick></div>
            <h1>Succesfull payment</h1>
            {/* <p>Amount: NPR{pagedata.totalprice}</p> */}
            {/* <button onClick={handlehome}>Go to home</button> */}

        </div>
        </>
    );
}