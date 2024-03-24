function TodoItem(props) {
  return (
    <div className="container">
      <div className="row alt-row">
        <div className="col-6">{props.name}</div>
        <div className="col-4">{props.date}</div>
        <div className="col-2">
          <button type="button " className="btn btn-danger alt-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
