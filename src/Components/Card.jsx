import React from "react";
import "../Styles/Card.css";

function Card({ formData }) {
  const { cardNumber, cardholderName, validThruMMYY, vendor } = formData;

  const vendorBackgroundColors = {
    "Bitcoin inc": "#FFB443",
    "Ninja bank": "#383838",
    "Block chain inc": "#7E50E2",
    "Evil corp": "#DD2F4E",
  };

  const backgroundColor = vendorBackgroundColors[vendor];

  return (
    <div className="card" style={{ backgroundColor: backgroundColor }}>
      <div className="card-images">
        <div className="card-chip">
          <img src="src/Assets/chip-dark.svg" alt="" />
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
        <h3>CARDHOLDER NAME</h3>
        <h3>VALID THRU</h3>
      </div>
      <div className="card-name">
        <div className="card-names">
          <h4 className="card-firstname-lastname">
            {cardholderName || "FIRSTNAME LASTNAME"}
          </h4>
        </div>
        <div className="card-dates">
          <h4 className="card-month-year">{validThruMMYY || "MM/YY"}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
