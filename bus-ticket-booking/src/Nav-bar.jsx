import styles from "./index.module.css";
import { BsTicket } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { MdOutlinePerson } from "react-icons/md";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from "./login/Login1";
function Navbar(){


    return(
        <>
            <div className={styles.navbar}>
                <Router>
                    <h1>Logo</h1>
                    <a href="">FAQ</a>
                    <a href="">Contact us</a>
                    <div className={styles.menu}>
                        <a href=""><BsTicket style={{marginRight:"5px"}}/>Manage Tickets</a>
                        <Link to="/login"><CiLogin style={{marginRight:"5px"}}/>Log in</Link>
                        <a href=""><MdOutlinePerson style={{marginRight:"5px"}}/>Sign Up</a>
                    </div>
                    <Routes>
                        <Route path="/login" element={<Login/>}></Route>
                    </Routes>
                </Router>
                
            </div>
        </>
    );
}

export default Navbar;