import React from "react";

interface PizzaProps {
  src: string;
  name: string;
  ingredients: string;
  price: number;
  soldOut: boolean;
}

// prettier-ignore
const Pizza: React.FC<PizzaProps> = ({ src, name, ingredients, price, soldOut }) => {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={src} alt={name} />
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-lg font-medium">{ingredients}</p>
        <span>{soldOut ? "Sold Out" : price}</span>
      </div>
    </li>
  );
};

export default Pizza;
