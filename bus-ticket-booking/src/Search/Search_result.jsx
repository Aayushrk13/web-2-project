import { useState } from "react";
import Navbar from "../Nav-bar";
import Searchbar from "../Search-bar";
import { useNavigate,useLocation } from "react-router-dom";
import Result from "./Result";
import Seatbooking from "./Seatbooking";
export default function Search_result(){
    const navigate=useNavigate();
    const location=useLocation();
    const searchdata=location.state.searchdata;
    const userinfo=location.state.pageinfo;
    const loggedin=location.state.loggedin;
    let resultlist=null;
    if(!searchdata){
        resultlist='No Bus Routes are available.';
    }else{
    resultlist=searchdata.map(data=><li key={data.busid} onClick={()=>{handleresultclick(data)}}>
        <Result  props={data}/>
    </li>
    );
    }
const handleresultclick=(data)=>{
    if(!loggedin){
        navigate('/login');
        return;
    }
    navigate("/seatboook",{state:data});
}
    return(
        <div>
            <Navbar loggedin={loggedin} userinfo={userinfo}></Navbar>
            <Searchbar loggedin={loggedin} userinfo={userinfo}/>
            <div>
            <ul>{resultlist}</ul>
            </div>
        </div>
    );
}