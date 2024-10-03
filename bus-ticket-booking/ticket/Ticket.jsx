import "./success.css";
export default function Ticket({props}){  
    return(
        <>
            <div className="result">
                <p>Bus Id: {props.busid}</p>
                <p>Seats: {props.seats}</p>
                <p>Amount: NPR{props.amount}</p>
            </div>
        </>
    );
}       