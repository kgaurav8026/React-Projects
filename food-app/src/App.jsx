import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import React, { useState } from "react";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      addFoodItem(newItems);
      event.target.value = "";
    }
  };

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  let [foodItems, addFoodItem] = useState([]);

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
        <FoodItems
          items={foodItems}
          handleOnChange={handleOnChange}
        ></FoodItems>
      </Container>
      <Container>
        <p>Above is the list of food items that are good for your health</p>
      </Container>
    </>
  );
}

export default App;
