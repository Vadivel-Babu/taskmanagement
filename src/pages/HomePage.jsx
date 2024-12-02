import React from "react";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div className="container-lg p-3">
      <div className="flex gap-3 items-center justify-evenly  flex-wrap">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HomePage;
