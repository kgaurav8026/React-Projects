function Clock() {
  let time = new Date();

  return (
    <center>
      <h1>Bharat Clock</h1>
      <p>This is the clock that shows the time in bharat at all the times.</p>
      <p>
        This is the current time: {time.toLocaleDateString()} -
        {time.toLocaleTimeString()}
      </p>
    </center>
  );
}
export default Clock;
