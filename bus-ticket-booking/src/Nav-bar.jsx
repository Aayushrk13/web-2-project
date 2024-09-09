import styles from "./index.module.css";
import { BsTicket } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { MdOutlinePerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar({loggedin,userinfo}){
    const navigate=useNavigate();
    const handlecontact=()=>{
        if(!loggedin){
            navigate("/login");
            return;
        }
        navigate ("/contactus",{state:userinfo})
    }
    const handlehome=()=>{
        if(!loggedin){
            navigate("/");
            return;
        }
        navigate("/",{state:userinfo})
    }
    function Profile(){
        if(!loggedin){
            return(
            <div className={styles.menu}>
               
                <Link to="/login"><CiLogin style={{marginRight:"5px"}}/>Log in</Link>
                <Link to="/signup"><MdOutlinePerson style={{marginRight:"5px"}}/>Sign Up</Link>
            </div>
            );
        }else{ 
            return (<div className={styles.menu}> <a href=""><BsTicket style={{marginRight:"5px"}}/>Manage Tickets</a><a href="">{userinfo.fullname}</a></div>);
        }      
    }

    return(
        <>
            <div className={styles.navbar}>
                    <h1 onClick={handlehome}>Logo</h1>
                    <a href="" onClick={handlecontact}>Contact us</a>
                    <div className={styles.menu}>
                        <Profile></Profile>
                    </div>
            </div>
        </>
    );
}

export default Navbar;