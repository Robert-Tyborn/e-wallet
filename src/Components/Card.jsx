import React from "react";
import "../Styles/Card.css";

function Card({ formData }) {
  return (
    <div className="card">
      <div className="card-images">
        <div className="card-chip">
          <img src="src/Assets/chip-dark.svg" alt="" />
        </div>
        <div className="card-vendor">
          {formData.vendor && (
            <img src={`src/Assets/vendor-${formData.vendor}.svg`} alt="" />
          )}
        </div>
      </div>
      {formData.cardNumber ? (
        <h2 className="card-number">{formData.cardNumber}</h2>
      ) : (
        <h2 className="card-number">XXXX XXXX XXXX XXXX</h2>
      )}
      <div className="card-valid">
        <h3>
          CARDHOLDER NAME
        </h3>
        <h3>VALID THRU</h3>
      </div>
      <div className="card-name">
        <div className="card-names">
          <h4 className="card-firstname-lastname">
            {formData.cardholderName || "FIRSTNAME LASTNAME"}
          </h4>
        </div>
        <div className="card-dates">
          <h4 className="card-month-year">
            {formData.validThruMMYY || "MM/YY"}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
