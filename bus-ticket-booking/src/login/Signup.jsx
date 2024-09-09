import styles from './login.module.css'
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import axios from 'axios';
export default  function Signup(){
    const navigate=useNavigate();
    const url="http://localhost/php/Signup.php";
    const regex_name = /^[a-zA-Z ]+$/;
    const regex_email=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [name,setname]=useState("");
    const [passtype,setpasstype]=useState('password');
    const handlesubmit=()=>{
        if(!regex_name.test(name)){
            alert("Name should contain only alphabets.");
            return;
        }
        if(!regex_email.test(email)){
            alert("Invalid email");
            return;
        }
        if(password.length<=6){
            alert("Invalid password should have atleast 7 characters.");
            return;
        }
        const fdata=new FormData();
        fdata.append("name",name);
        fdata.append("email",email);
        fdata.append("password",password);
        axios.post(url,fdata)
        .then(response=>navigate("/login"))
        .catch(response=>alert(response));
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
            <div>  
                <div className={styles.input} >
                <input className={styles.field} type="text" placeholder="FullName" required onChange={(e)=>{setname(e.target.value)}}/>
                    <input className={styles.field} type="email" placeholder="Email" required onChange={(e)=>{setemail(e.target.value)}}/>
                    <div className={styles.in}>
                        <input className={styles.field} type={passtype} placeholder="Password" required onChange={(e)=>{setpassword(e.target.value)}}/>
                        <Passicon></Passicon>
                    </div>
                    <button onClick={handlesubmit}>Submit</button>
                </div>
                <span className={styles.sign}>Already have an account?</span>
                <Link to="/Login" className={styles.signlink}>Login</Link>
            </div>
            <h2>Signup</h2>
            <h1>BusBooker</h1>
        </div>
        </>
    );
}