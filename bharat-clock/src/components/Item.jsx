import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <>
      <li className={styles["alt-item"]}>
        <span className={styles["alt-span"]}>{foodItem}</span>
      </li>
    </>
  );
};

export default Item;
