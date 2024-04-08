const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h2>There are no posts</h2>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Get Posts From Server
      </button>
    </center>
  );
};
export default WelcomeMessage;
