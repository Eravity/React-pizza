import React from "react";

// files
import "../public/index.css";

// components
import Header from "./assets/components/header";
import Footer from "./assets/components/footer";
import Menu from "./assets/components/menu";

const App: React.FC = () => {
  return (
    <div className="container ">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
