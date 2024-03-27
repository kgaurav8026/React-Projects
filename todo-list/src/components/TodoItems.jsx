import Item from "./Item.jsx";
function TodoItems({ todoItems }) {
  return (
    <div className="container">
      {todoItems.map((item) => {
        return <Item item={item} key={item.name}></Item>;
      })}
    </div>
  );
}
export default TodoItems;
