import React, { useEffect, useState } from "react";
import "./BusSeatBooking.css"; // Optional for styling
import { useLocation,useNavigate, redirect } from "react-router-dom";
import axios from "axios";
const Seatbooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const busdata = location.state.data;
  const userinfo=location.state.userinfo;
  const loggedin=location.state.loggedin;
  const totalSeats = 20; // Total number of seats available
  const phpurl='http://localhost/php/pay.php';
  const inserturl="http://localhost/php/successpay.php";
  const [selectedSeats, setSelectedSeats] = useState([]);
  // Generate seat numbers dynamically
  const seats = Array.from({ length: totalSeats }, (_, index) => index + 1);
  const preselected = JSON.parse(busdata.bookedseats);
  // Handle seat selection/deselection
  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      if (selectedSeats.length > 5) {
        return;
      }
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };
  const totalprice = selectedSeats.length * busdata.price;
  const handlepay=()=>{
    if(totalprice==0){
      alert('Select seats');
      return;
    }
    console.log(totalprice);
    const bookedseats=[...selectedSeats,...preselected];
    const paydata=new FormData();
    paydata.append('amount',totalprice*100);
    paydata.append('purchase_order_id',userinfo.email);
    paydata.append('purchase_name',busdata.busname);
    paydata.append('customer_name',userinfo.fullname);
    paydata.append('customer_email',userinfo.email);
    paydata.append('busid',busdata.busid);
    paydata.append('bookedseats',`[${bookedseats}]`);
    paydata.append('selectedseats',`[${selectedSeats}]`);
    //for table updates
    axios.post(phpurl,paydata)
    .then(response=>handleresponse(response.data))
    .catch(error=>alert(error));
    axios.post("http://localhost/php/successpay.php",paydata)
    .then(response=>console.log(response.data));
  }
  const handleresponse=(response)=>{

    console.log(response);
    window.location.href=response.payment_url;
  }
  return (
    <div className="container">

      <h1>{busdata.busname}</h1>

      <div className="seats-grid">
        {seats.map((seatNumber) => (
          <div
            key={seatNumber}
            className={`seat
              ${preselected.includes(seatNumber) ? "prebooked" : ""}
              ${selectedSeats.includes(seatNumber) ? "selected" : ""}`}
            onClick={() => {
              if (!preselected.includes(seatNumber)) {
                handleSeatClick(seatNumber);
              }
            }}
          >
            {seatNumber}
          </div>
        ))}
      </div>

      <div className="selected-seats">
        <div className="numseats">
          <h2>Selected Seats:</h2>
          {selectedSeats.length > 0 ? (
            <p>{selectedSeats.join(", ")}</p>
          ) : (
            <p>No seats selected</p>
          )}
        </div>
        <div className="payinfo">
          <p>Total Amount: NPR  {totalprice}<br /></p>
          <button className="btn" onClick={handlepay}>Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Seatbooking;
