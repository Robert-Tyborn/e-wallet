import React from "react";
import "../Styles/Card.css";

function Card({ formData, onDelete }) {
  const { cardNumber, cardholderName, validThruMMYY, vendor } = formData;

  const vendorBackgroundColors = {
    "Bitcoin inc": "#FFB443",
    "Ninja bank": "#383838",
    "Block chain inc": "#7E50E2",
    "Evil corp": "#DD2F4E",
  };

  const backgroundColor = vendorBackgroundColors[vendor];
  const isWhiteText = vendor === "Ninja bank" || vendor === "Evil corp";
  const chipImage =
    vendor === "Ninja bank" ? "chip-light.svg" : "chip-dark.svg";

  return (
    <div
      className={`card ${isWhiteText ? "white-text" : ""}`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="card" style={{ backgroundColor: backgroundColor }}>
        <div className="card-images">
          <div className="card-chip">
            <img src={`src/Assets/${chipImage}`} alt="" />
          </div>
          <div className="card-vendor">
            {vendor && <img src={`src/Assets/vendor-${vendor}.svg`} alt="" />}
          </div>
        </div>
        {cardNumber ? (
          <h2 className="card-number">{cardNumber}</h2>
        ) : (
          <h2 className="card-number">XXXX XXXX XXXX XXXX</h2>
        )}
        <div className="card-valid">
          <h3 className={isWhiteText ? "white-text" : ""}>CARDHOLDER NAME</h3>
          <h3 className={isWhiteText ? "white-text" : ""}>VALID THRU</h3>
        </div>
        <div className="card-name">
          <div className="card-names">
            <h4 className="card-firstname-lastname">
              {(cardholderName || "FIRSTNAME LASTNAME").toUpperCase()}
            </h4>
          </div>
          <div className="card-dates">
            <h4 className="card-month-year">
              {(validThruMMYY || "MM/YY").toUpperCase()}
            </h4>
          </div>
        </div>
        {onDelete && <button className="dlt-btn" onClick={onDelete}>DELETE</button>}
      </div>
    </div>
  );
}

export default Card;
