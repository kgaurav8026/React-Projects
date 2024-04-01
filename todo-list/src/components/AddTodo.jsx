import { useRef } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
function AddTodo({ addNewItems }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleOnAddButton = (event) => {
    event.preventDefault();
    let itemName = todoNameElement.current.value;
    let itemDueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItems(itemName, itemDueDate);
  };

  return (
    <form className="item-container" onSubmit={handleOnAddButton}>
      <div className="row alt-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement}></input>
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
