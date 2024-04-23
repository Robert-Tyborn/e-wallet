import React from "react";
import "../Styles/CardForm.css";

const CardForm = ({ formData, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="cardform-form">
      <label>
        CARD NUMBER
        <input
          className="input-big"
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={onChange}
          placeholder="XXXX XXXX XXXX XXXX"
        />
      </label>
      <label>
        CARDHOLDER NAME
        <input
          className="input-big"
          type="text"
          name="cardholderName"
          value={formData.cardholderName}
          onChange={onChange}
          placeholder="FIRSTNAME LASTNAME"
        />
      </label>
      <div className="valid-cvv-flex">
        <div className="valid-box">
          <label>
            VALID THRU
            <input
              className="input-small"
              type="text"
              name="validThruMMYY"
              value={formData.validThruMMYY}
              onChange={onChange}
              placeholder="MM/YY"
            />
          </label>
        </div>
        <div className="ccv-box">
          <label>
            CCV
            <input
              className="input-small"
              type="text"
              name="ccv"
              value={formData.ccv}
              onChange={onChange}
              placeholder="XXX"
            />
          </label>
        </div>
      </div>
      <label>
        VENDOR
        <select
          className="input-big"
          name="vendor"
          value={formData.vendor}
          onChange={onChange}
        >
          <option value="" disabled>
            -- Select vendor --
          </option>
          <option value="Bitcoin inc">BITCOIN INC</option>
          <option value="Ninja bank">NINJA BANK</option>
          <option value="Block chain inc">BLOCK CHAIN INC</option>
          <option value="Evil corp">EVIL CORP </option>
        </select>
      </label>
      <button className="add-card-btn" type="submit">
        ADD CARD
      </button>
    </form>
  );
};

export default CardForm;
