import styles from "./index.module.css"
import { useState } from "react"
export default function FAQ(){
    const QA=[{
        no:1,
        question:"What is BusBooker?",
        answer:"It is a bus ticket booking platform to book tickets easily."
    },{
        no:2,
        question:"Does BusBooker own the buses?",
        answer:"No, they are owned by the operators."
    },{
        no:3,
        question:"How do I pay?",
        answer:"You can pay via esewa."
    },{
        no:4,
        question:"How will I get the confirmation of ticket?",
        answer:"The ticket number will be sent to you via email."
    },{
        no:5,
        question:"Do I need to be logged in to book tickets?",
        answer:"Yes, you have to log in with your email address."
    }
    ]
    const [selected,setselected]=useState(null);
    const handleQclick=(index)=>{
        if(selected!=index){
            setselected(index);
        }else{
            setselected(null);
        }
    }
    const QAlist=QA.map(qa=>
        <li key={qa.no} onClick={()=>handleQclick(qa.no)}>
            <div>{qa.question}</div>
            <div className={styles.answer} style={{display: selected===qa.no?'block':'none'}}>{qa.answer}</div>
        </li>
    )
    return(
        <div className={styles.container}>
            <div className={styles.package}>
                <h2>Frequently Asked Questions</h2>
                <ul>{QAlist}</ul>
            </div>
        </div>
    );
}