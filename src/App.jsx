import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardElement = data.map((item) => {
    return <Card {...item} />;
  });
  return (
    <div className="cotainer">
      <Navbar />
      {cardElement}
    </div>
  );
}

export default App;
