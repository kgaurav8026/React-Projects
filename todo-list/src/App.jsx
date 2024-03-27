import "./App.css";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import { useState } from "react";

function App() {
  const dummyData = [
    {
      name: "Leetcode Contest",
      dueDate: "22/03/2024",
    },
    {
      name: "Github Contribution",
      dueDate: "22/03/2024",
    },
    {
      name: "Buy Blender",
      dueDate: "22/03/2024",
    },
  ];

  let [todoItems, setTodoItems] = useState(dummyData);
  const handleOnChange = (itemName, itemDueDate) => {
    let newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo handleOnChange={handleOnChange} />
        <TodoItems todoItems={todoItems} />
      </div>
    </center>
  );
}

export default App;
