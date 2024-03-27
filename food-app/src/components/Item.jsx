// handle onClick event
import styles from "./Item.module.css";

const Item = ({ foodItem, handleBuyButton, bought }) => {
  return (
    <>
      <li className={`list-group-item ${bought && "active"}`}>
        <span className={styles["alt-span"]}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleBuyButton}
        >
          {bought ? "Sell" : "Buy"}
        </button>
      </li>
    </>
  );
};

export default Item;
