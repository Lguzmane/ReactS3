import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../../pizzas";

const Home = ({ addToCart }) => {
  return (
    <div>
      <Header />
      <div className="card-container">
        {pizzas?.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            img={pizza.img}
            ingredients={pizza.ingredients}
            addToCart={() => addToCart(pizza)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
