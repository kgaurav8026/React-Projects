import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "./Counter";
import { privacyActions } from "./Privacy";
import PrivacyToggle from "./PrivacyToggle";
const Controls = () => {
  const inputElement = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAddition = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handleSubtraction = () => {
    dispatch(counterActions.sub(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handleToggle = () => {
    dispatch(privacyActions.toggle());
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={handleToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        />
        <button type="button" className="btn btn-info" onClick={handleAddition}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtraction}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;
