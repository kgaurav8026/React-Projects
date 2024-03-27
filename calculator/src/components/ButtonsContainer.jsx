import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ handleOnClick }) => {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={styles.button}
          key={buttonName}
          onClick={() => handleOnClick(buttonName)}
        >
          <b> {buttonName}</b>
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
