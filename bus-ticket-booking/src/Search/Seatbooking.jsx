import React, { useEffect, useState } from "react";
import "./BusSeatBooking.css"; // Optional for styling
import { useLocation } from "react-router-dom";
import axios from "axios";
const Seatbooking = () => {
  const location = useLocation();
  const busdata = location.state;
  const totalSeats = 20; // Total number of seats available
  const [selectedSeats, setSelectedSeats] = useState([]);
  const hmacurl = 'http://localhost/php/hmac.php';
  const phpurl = "http://localhost/php/pay.php";
  // Generate seat numbers dynamically
  const seats = Array.from({ length: totalSeats }, (_, index) => index + 1);
  const preselected = JSON.parse(busdata.bookedseats);
  console.log(preselected);
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
    console.log(selectedSeats);
  };
  const totalprice = selectedSeats.length * busdata.price;
  const gethmac = () => {
    axios.post(hmacurl)
      .then(response =>  response.data)
      .catch(error => alert(error.message));

  }
  const paywithesewa = () => {
    const fdata={
      amount: totalprice,
      tax_amount:10,
      transaction_uuid:busdata.busid,
      product_code:busdata.busname,
      product_service_charge:0,
      product_delivery_charge:0,
      success_url:'https://esewa.com.np',
      failure_url:'https://google.com',
      signed_field_names:'total_amount,transaction_uuid,product_id',
      signature:gethmac()
    }
    axios.post(phpurl, fdata)
      .then(response => console.log(response))
      .catch(error => alert(error.message));
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
          <button className="btn" onClick={paywithesewa}>Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Seatbooking;
