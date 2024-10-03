import { useState,useEffect } from "react";
import Navbar from "../src/Nav-bar";
import "./success.css";
import { RxCross2 } from "react-icons/rx";
export default function Fail(){
    const [userinfo,setuserinfo]=useState({fullname:'',email:''});
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const fullname = queryParams.get('name');
        const email = queryParams.get('email');
        setuserinfo({ fullname, email });
    }, []);
    return(
        <>
        <Navbar loggedin={true} userinfo={userinfo}></Navbar>
        <div className="container">
            <div className="failurecircle"><RxCross2></RxCross2></div>
            <h1>Payment Failed</h1>
            {/* <p>Amount: NPR{pagedata.totalprice}</p> */}
            {/* <button onClick={handlehome}>Go to home</button> */}

        </div>
        </>
    );
}