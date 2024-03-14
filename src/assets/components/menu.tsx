import React from "react";
import Pizza from "./pizza";
import pizzaData from "../../../public/data";

const Menu: React.FC = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      <p className="max-w-[580px]">
        Authentic Italian cuisine. Six creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.key}
            src={pizza.photoName}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            soldOut={pizza.soldOut}
          />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
