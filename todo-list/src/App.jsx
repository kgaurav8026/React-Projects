import "./App.css";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  let [todoItems, setTodoItems] = useState([]);
  const handleOnSubmit = (itemName, itemDueDate) => {
    let newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  const handleOnDelete = (deleteItem) => {
    let newTodoItems = todoItems.filter((item) => item.name != deleteItem.name);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleOnSubmit={handleOnSubmit} />
      {todoItems.length == 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} handleOnDelete={handleOnDelete} />
    </center>
  );
}

export default App;
