import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import "../Styles/Home.css";
import CardStack from "../Components/CardStack";

function Home() {
  const [activeCard, setActiveCard] = useState(null);

  const formData = {
    cardNumber: "XXXX XXXX XXXX XXXX",
    cardholderName: "FIRSTNAME LASTNAME",
    validThruMMYY: "MM/YY",
    ccv: "123",
    vendor: "",
  };

  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  return (
    <div>
      <div className="top">
        <h1 className="home-title">E-WALLET</h1>
      </div>
      {activeCard ? (
        <Card formData={activeCard} />
      ) : (
        <Card formData={formData} />
      )}
      <CardStack activeCard={activeCard} onCardClick={handleCardClick} />
      <div className="button-container">
        <Link to="/addcard" className="new-card-btn">
          ADD A NEW CARD
        </Link>
      </div>
    </div>
  );
}

export default Home;
