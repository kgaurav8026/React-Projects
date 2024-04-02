import { useContext } from "react";
import Item from "./Item.jsx";
import { TodoItemsContext } from "../store/todo-items-store.jsx";
function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className="item-container">
      {todoItems.map((item) => {
        return <Item item={item} key={item.name}></Item>;
      })}
    </div>
  );
}
export default TodoItems;
