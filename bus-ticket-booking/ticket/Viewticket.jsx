import Navbar from "../src/Nav-bar";
import Ticket from "./Ticket";
import { useLocation } from "react-router-dom";
export default function Viewticket(){
    const location=useLocation();
    let key=1;
    const data=location.state;
    console.log(data);
    const userinfo={fullname:data[0].username,email:data[0].email};
    const tickets=data.map(info=><li key={key++}><Ticket props={info}></Ticket></li>)
    return(
        <>
            <Navbar loggedin={true} userinfo={userinfo}></Navbar>
            <ul>{tickets}</ul>
        </>     
    );
}