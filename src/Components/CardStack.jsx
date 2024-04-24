import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "../Styles/CardStack.css";

function CardStack({ activeCard, onCardClick }) {
  const cards = useSelector((state) => state.card);

  return (
    <div className="card-stack-container">
      {Array.isArray(cards) &&
        cards.map((card, index) => {
          if (card === activeCard) {
            return null;
          }
          return (
            <div
              key={index}
              className="card-stack-item"
              style={{ marginTop: index * 3 + "rem" }}
              onClick={() => onCardClick(card)}
            >
              <Card formData={card} />
            </div>
          );
        })}
    </div>
  );
}

export default CardStack;
