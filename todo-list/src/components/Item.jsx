import { MdDelete } from "react-icons/md";
const Item = ({ item, handleOnDelete }) => {
  const onDelete = () => {
    handleOnDelete(item);
  };
  return (
    <div className="row alt-row">
      <div className="col-6">{item.name}</div>
      <div className="col-4">{item.dueDate}</div>
      <div className="col-2">
        <button
          type="button "
          className="btn btn-danger alt-btn"
          onClick={onDelete}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};
export default Item;
