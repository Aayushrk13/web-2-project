import axios from "axios";
import styles from "./index.module.css";
import { BsTicket } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { FaBus } from "react-icons/fa";
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
        navigate ("/contactus",{state:userinfo});
    }
    const handlehome=()=>{
        if(!loggedin){
            navigate("/");
            return;
        }
        navigate("/",{state:userinfo});
    }
    const handlelogout=()=>{
        navigate('/');
    }
    // const handleticket=()=>{

    //     const email=userinfo.email;
    //     const ticketdata=new FormData();
    //     ticketdata.append('email',email);
    //     axios.post("http://localhost/php/ticket.php",ticketdata)
    //     .then(response=>navigate("/getticket",{state:response.data}))
    //     .catch(error=>alert(error));
    // }

    function Profile(){
        if(!loggedin){
            return(
            <div className={styles.menu}>
               
                <Link to="/login"><CiLogin style={{marginRight:"5px"}}/>Log in</Link>
                <Link to="/signup"><MdOutlinePerson style={{marginRight:"5px"}}/>Sign Up</Link>
            </div>
            );
        }else{ 
            return (<div className={styles.menu}> 
             <a href="" >{userinfo.fullname}</a>
             <a href="" onClick={handlelogout}>Logout</a>
            </div>)
            ;
        }      
    }

    return(
        <>
            <div className={styles.navbar}>
                    <div className={styles} onClick={handlehome}>
                    <FaBus></FaBus>
                    <a>Booker</a>
                    </div>
                    <a href="" onClick={handlecontact}>Contact us</a>
                    <div className={styles.menu}>
                        <Profile></Profile>
                    </div>
            </div>
        </>
    );
}

export default Navbar;