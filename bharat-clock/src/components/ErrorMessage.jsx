// Conditional rendering is used
const ErrorMessage = ({ items }) => {
  return <>{items.length == 0 ? "No Tasty Food :( " : null}</>;
};

export default ErrorMessage;
