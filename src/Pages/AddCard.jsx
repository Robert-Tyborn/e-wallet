import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Card from "../Components/Card";
import CardForm from "../Components/CardForm";
import "../Styles/AddCard.css";

function AddCard() {
  const navigate = useNavigate(); // Initialize navigatedsdsd
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/"); // Redirect to the Home page using navigate
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
