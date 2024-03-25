// handle onClick event
import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handleOnClick = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };
  return (
    <>
      <li className="list-group-item">
        <span className={styles["alt-span"]}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={(event) => handleOnClick(event)}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
