import React from "react";
import Order from "./orderButton";

const Footer: React.FC = () => {
  const openHour = 12;
  const closingHour = 22;
  return (
    <footer className="footer flex items-center flex-col gap-10">
      <p>
        We are open from {openHour}:00 to {closingHour}:00. Come visit us or
        order online.
      </p>
      <Order />
    </footer>
  );
};

export default Footer;
