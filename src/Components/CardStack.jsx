import { useSelector } from "react-redux";
import Card from "./Card";


function CardStack() {

  const cards = useSelector((state) => state.card);
   
  console.log("Cards:", cards);

  return (
    <div>
      {Array.isArray(cards) && cards.map((card, index) => (
        <div key={index}>
        
          <p>{card.cardNumber}</p>
          <p>{card.cardholderName}</p>
          <p>{card.validThruMMYY}</p>
          <p>{card.ccv}</p>
        
        </div>
      ))}
    </div>
  );
}

export default CardStack;