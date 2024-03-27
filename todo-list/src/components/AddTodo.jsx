import { useState } from "react";
function AddTodo({ handleOnChange }) {
  let [itemName, setItemName] = useState("");
  let [itemDueDate, setDueDate] = useState("");
  const onChangeName = (event) => {
    setItemName(event.target.value);
  };
  const onChangeDate = (event) => {
    setDueDate(event.target.value);
  };

  const onSubmit = () => {
    handleOnChange(itemName, itemDueDate);
    setItemName("");
    setDueDate("");
  };

  return (
    <div className="container">
      <div className="row alt-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={itemName}
            onChange={onChangeName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={itemDueDate}
            onChange={onChangeDate}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success alt-btn"
            onClick={onSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
