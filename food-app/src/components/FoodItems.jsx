import Item from "./Item";
import { useState } from "react";

function FoodItems({ items }) {
  // object destructuring is used
  // concepts like React.Fragement, mapping is used
  // props passing from parent to children
  let [activeItems, setActiveItems] = useState([]);
  const handleBuyButton = (item) => {
    console.log(`${item} being bought`);
    // checks if item is bought or not
    if (activeItems.includes(item)) {
      const index = activeItems.indexOf(item);
      activeItems.splice(index, 1);
    } else {
      activeItems.push(item);
    }
    let newItems = [...activeItems];
    setActiveItems(newItems);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            bought={activeItems.includes(item)}
            handleBuyButton={() => handleBuyButton(item)}
          ></Item>
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
