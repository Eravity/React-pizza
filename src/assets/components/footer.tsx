import React from "react";
import { useState, useEffect } from "react";

import Order from "./orderButton";

const Footer: React.FC = () => {
  const [time, setTime] = useState(new Date());

  // Current time function
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const openHour = 12;
  const closingHour = 22;

  // current time formatted
  const formattedTime = time.toLocaleTimeString();

  return (
    <footer className="footer flex items-center flex-col gap-10">
      <p>
        We are open from {openHour}:00 to {closingHour}:00. Come visit us or
        order online.
      </p>
      <p>Current time: {formattedTime}</p>
      <Order />
    </footer>
  );
};

export default Footer;
