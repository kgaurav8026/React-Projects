import styles from "./Display.module.css";
const Display = ({ displayVal }) => {
  return (
    <input
      className={styles.display}
      type="text"
      defaultValue={displayVal}
    ></input>
  );
};
export default Display;
