import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Countdown = (props) => {
  const [count, setCount] = useState(5);
  let navigate = useNavigate();
  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      navigate("/confirmation")
    }
  }, [count]);

  

  return (
    <div className="countdown-timer ">
      <h1 className="countdown">{count}</h1>
    </div>
  );
};

export default Countdown;
