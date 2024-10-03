import { useLocation,useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Getticketdata(){
    const location=useLocation();
    const navigate=useNavigate();
    const data=location.state;
    console.log(data);
    useEffect(()=>{
        navigate("/viewticket",{state:data});
    },[]);
    return(
        <>
            <h1>tickets</h1></>
    );
}