import { useState } from "react";
function AddTodo({ handleOnSubmit }) {
  let [itemName, setItemName] = useState("");
  let [itemDueDate, setDueDate] = useState("");
  const onChangeName = (event) => {
    setItemName(event.target.value);
  };
  const onChangeDate = (event) => {
    setDueDate(event.target.value);
  };

  const onSubmit = () => {
    handleOnSubmit(itemName, itemDueDate);
    setItemName("");
    setDueDate("");
  };

  return (
    <div className="item-container">
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
