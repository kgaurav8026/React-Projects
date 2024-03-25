import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import React from "react";
import "./App.css";
import Container from "./components/Container";

function App() {
  let foodItems = ["Burger", " Roll", "Pastry", "Noodle"];
  return (
    <>
      <Container>
        <h1>Tasty Food</h1>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
          Above is the list of tasty food items that are good for your health
        </p>
      </Container>
    </>
  );
}

export default App;
