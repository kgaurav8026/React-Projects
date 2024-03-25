// handle onChange event

import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      className={styles.foodInput}
      type="text"
      placeholder="Enter Food Item Here"
      onChange={(event) => handleOnChange(event)}
    ></input>
  );
};
export default FoodInput;
