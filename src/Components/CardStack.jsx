import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "../Styles/CardStack.css";

function CardStack() {
  const cards = useSelector((state) => state.card);

  return (
    <div className="card-stack-container">
      {Array.isArray(cards) && cards.map((card, index) => (
        <div key={index} className="card-stack-item" style={{ marginTop: index * 3 + "rem" }}>
          <Card formData={card} />
        </div>
      ))}
    </div>
  );
}

export default CardStack;
