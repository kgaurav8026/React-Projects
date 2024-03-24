import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import React from "react";
import "./App.css";

function App() {
  let foodItems = ["Burgers", " Rolls", "Pastries", "Noodles"];
  return (
    <>
      <h1>Tasty Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
