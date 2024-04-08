import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="bg-dark text-white rounded p-4">
        <h1 className="text-center mb-4">Bharat Clock</h1>
        <p className="text-center mb-4">
          IST: The Clock Set to UTC+05:30, India’s Only Time Zone
        </p>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <span className="display-4 me-3">{formattedDate}</span>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <span className="display-1 fw-bold">{formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
