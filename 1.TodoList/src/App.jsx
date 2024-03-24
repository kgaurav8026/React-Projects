import "./App.css";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo />
        <TodoItem name="Watch Netflix" date="22/03/2024" />
        <TodoItem name="Sutta Party" date="23/04/2024" />
      </div>
    </center>
  );
}

export default App;
