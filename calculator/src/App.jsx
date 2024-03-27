import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
function App() {
  let [calVal, setCalVal] = useState("");
  const handleOnClick = (btn) => {
    if (btn === "C") {
      setCalVal("");
    } else if (btn === "=") {
      let ans = eval(calVal);
      setCalVal(ans);
    } else {
      let newVal = calVal + btn;
      setCalVal(newVal);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonsContainer handleOnClick={handleOnClick} />
    </div>
  );
}
export default App;
