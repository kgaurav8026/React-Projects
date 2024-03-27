import Item from "./Item.jsx";
function TodoItems({ todoItems, handleOnDelete }) {
  return (
    <div className="item-container">
      {todoItems.map((item) => {
        return (
          <Item
            item={item}
            key={item.name}
            handleOnDelete={handleOnDelete}
          ></Item>
        );
      })}
    </div>
  );
}
export default TodoItems;
