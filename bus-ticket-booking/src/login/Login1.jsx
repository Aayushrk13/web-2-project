import styles from "./login.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import axios from 'axios';
function Login(){
    const navigate=useNavigate();
    const url="http://localhost/php/Login.php";
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [passtype,setpasstype]=useState('password');
    const handlesubmit=()=>{
        
        if(password.length<=6){
            alert("Invalid password should have atleast 7 characters.");
            return;
        }
        const fdata=new FormData();
        fdata.append("email",email);
        fdata.append("password",password);
        axios.post(url,fdata)
        .then(response=>handlesresponse(response.data))
        .catch(response=>alert(response));
    }
    const handlesresponse=(data)=>{
        if(data==null){
            navigate("/login");
            return;
        }
        navigate("/",{state:data});
    }
    const showpassword=()=>{
        if(passtype==='password'){
            setpasstype('text');
        }else{
            setpasstype('password');
        }
    }
    const Passicon=()=>{
        if(passtype==='password'){
            return (<FaRegEyeSlash className={styles.icon} onClick={showpassword}/>);
        }else{
            return(<FaRegEye className={styles.icon} onClick={showpassword}/>)
        }
    }
    return(
        <>
        <Link to="/">Back to Home</Link>
        <div className={styles.main}>
            <h1>BusBooker</h1>
            <h2>Login</h2>
            <div>  
            <div className={styles.input}>
                <input className={styles.field} type="email" placeholder="Email" required onChange={(e)=>{setemail(e.target.value)}}/>
                <div className={styles.in}>
                    <input className={styles.field} type={passtype} placeholder="Password" required onChange={(e)=>{setpassword(e.target.value)}}/>
                    <Passicon></Passicon>
                </div>
                <button onClick={handlesubmit}>Submit</button>
            </div>
                <span className={styles.sign}>Don't have an account?</span>
                <Link to="/signup" className={styles.signlink}>Sign up</Link>
            </div>
        </div>
        </>
        
    );
}

export default Login;