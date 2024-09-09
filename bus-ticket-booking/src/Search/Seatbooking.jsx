import React, { useEffect, useState } from "react";
import "./BusSeatBooking.css"; // Optional for styling
import { useLocation } from "react-router-dom";
const Seatbooking = () => {
    const location=useLocation();
    const busdata=location.state;
  const totalSeats = 20; // Total number of seats available
  const [selectedSeats, setSelectedSeats] = useState([]);
  // Generate seat numbers dynamically
  const seats = Array.from({ length: totalSeats }, (_, index) => index + 1);
  const preselected=JSON.parse(busdata.bookedseats);
  console.log(preselected);
  // Handle seat selection/deselection
  const handleSeatClick = (seatNumber) => {
      if (selectedSeats.includes(seatNumber)) {
          setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
        if(selectedSeats.length>5){
            return;
        }
        setSelectedSeats([...selectedSeats, seatNumber]);
    }
    console.log(selectedSeats);
  };

  return (
    <div className="container">

      <h1>Bus Seat Booking</h1>

      <div className="seats-grid">
        {seats.map((seatNumber) => (
          <div
            key={seatNumber}
            className={`seat
              ${preselected.includes(seatNumber) ? "prebooked" : ""}
              ${selectedSeats.includes(seatNumber) ? "selected" : ""}`}
            onClick={() =>{
              if(!preselected.includes(seatNumber)) {
                handleSeatClick(seatNumber);
              }
            }}
          >
            {seatNumber}
          </div>
        ))}
      </div>

      <div className="selected-seats">
        <h2>Selected Seats:</h2>
        {selectedSeats.length > 0 ? (
          <p>{selectedSeats.join(", ")}</p>
        ) : (
          <p>No seats selected</p>
        )}
      </div>
    </div>
  );
};

export default Seatbooking;
