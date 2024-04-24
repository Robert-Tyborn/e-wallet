import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import CardForm from "../Components/CardForm";
import "../Styles/AddCard.css";
import { useDispatch } from "react-redux";
import { addCard } from "../Reducer/cardReducer";

function AddCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardholderName: "",
    validThruMMYY: "",
    ccv: "",
    vendor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("Form changed:", formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard(formData));
    console.log("Form submitted:", formData);
    navigate("/");
  };

  return (
    <div>
      <div className="top">
        <h1 className="addcard-title">ADD A NEW BANK CARD</h1>
      </div>
      <Card formData={formData} />
      <CardForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default AddCard;
