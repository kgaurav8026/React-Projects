import "./App.css";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  let [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const deleteItem = (Item) => {
    let newTodoItems = todoItems.filter((item) => item.name != Item.name);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems todoItems={todoItems} />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
