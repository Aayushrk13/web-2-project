import Navbar from "./Nav-bar";
import styles from './index.module.css';
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function ContactUs(){
    const location =useLocation();
    const data=location.state;
    const [result, setResult] = useState("");
    const useremail=data.email;
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("Sender Email",useremail);
  
      formData.append("access_key", "47c3da26-9a93-44db-a4de-2544ca99ed1e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        mode:'no-cors',
        body: formData,
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return(
        <>
        <Navbar loggedin={true} userinfo={data}></Navbar>
        <div className={styles.contact_main}>
            <div className={styles.contact}>
                <h2>Send a message</h2>
                <p>Our team will contact you soon.</p>
                <form onSubmit={onSubmit} >
                <div className={styles.contactinput}>
                    <h3>Message</h3>
                    <input type="hidden" value={useremail} />
                    <textarea name="message" />
                </div>
                <button type="submit" className={styles.btn} id={styles.contactbtn}>Send</button>
                </form>
                {result}
            </div>
        </div>
        </>
    );
}