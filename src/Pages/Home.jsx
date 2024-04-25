import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import "../Styles/Home.css";
import CardStack from "../Components/CardStack";
import { useDispatch } from "react-redux";
import { removeCard } from "../Reducer/cardReducer";

function Home() {
  const [activeCard, setActiveCard] = useState(null);
  const dispatch = useDispatch();

  const formData = {
    cardNumber: "XXXX XXXX XXXX XXXX",
    cardholderName: "FIRSTNAME LASTNAME",
    validThruMMYY: "MM/YY",
    ccv: "",
    vendor: "",
  };

  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  const handleDeleteCard = () => {
    dispatch(removeCard(activeCard));

    const existingCards = JSON.parse(localStorage.getItem("cards")) || [];
    const updatedCards = existingCards.filter((card) => card.cardNumber !== activeCard.cardNumber);
    localStorage.setItem("cards", JSON.stringify(updatedCards));

    setActiveCard(null); 
  };

  return (
    <div>
      <div className="top">
        <h1 className="home-title">E-WALLET</h1>
      </div>
      {activeCard ? (
        <>
          <Card formData={activeCard} onDelete={handleDeleteCard} /> 
        </>
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
