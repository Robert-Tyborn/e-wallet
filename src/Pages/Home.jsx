import React from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import "../Styles/Home.css";

function Home() {
  const formData = {
    cardNumber: "XXXX XXXX XXXX XXXX",
    cardholderName: "FIRSTNAME LASTNAME",
    validThruMMYY: "MM/YY",
    ccv: "123",
    vendor: "",
  };

  return (
    <div>
      <div className="top">
        <h1 className="home-title">E-WALLET</h1>
      </div>
      <Card formData={formData} />
      <Link to="/addcard" className="new-card-btn">
        ADD A NEW CARD
      </Link>
    </div>
  );
}

export default Home;
