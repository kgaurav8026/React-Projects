import { useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
function AddTodo({ addNewItems }) {
  let [itemName, setItemName] = useState("");
  let [itemDueDate, setDueDate] = useState("");
  const onChangeName = (event) => {
    setItemName(event.target.value);
  };
  const onChangeDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleOnAddButton = (event) => {
    console.log(event);
    event.preventDefault();
    addNewItems(itemName, itemDueDate);
    setItemName("");
    setDueDate("");
  };

  return (
    <form className="item-container" onSubmit={handleOnAddButton}>
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
          <button type="submit" className="btn btn-success alt-btn">
            <MdOutlineAddCircle />
          </button>
        </div>
      </div>
    </form>
  );
}
export default AddTodo;
