import styles from "./index.module.css";
import { BsTicket } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { MdOutlinePerson } from "react-icons/md";
function Navbar(){


    return(
        <>
            <div className={styles.navbar}>
                <h1>Logo</h1>
                <a href="">Tours</a>
                <a href="">Reservations</a>
                <a href="">FAQ</a>
                <a href="">Conatct us</a>
                <div className={styles.menu}>
                    <a href=""><BsTicket style={{marginRight:"5px"}}/>Manage Tickets</a>
                    <a href=""><CiLogin style={{marginRight:"5px"}}/>Log in</a>
                    <a href=""><MdOutlinePerson style={{marginRight:"5px"}}/>Sign Up</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;