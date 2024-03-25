import FoodInput from "./FoodInput";
import Item from "./Item";

function FoodItems({ items }) {
  // object destructuring is used
  // concepts like React.Fragement, mapping is used
  // props passing from parent to children

  return (
    <>
      <FoodInput />
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
