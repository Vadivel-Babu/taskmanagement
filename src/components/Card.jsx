import React from "react";

const Card = ({
  bg = "",
  color = "",
  title = "title",
  content = "content",
}) => {
  console.log(bg);

  return (
    <div className={`shadow-lg rounded-lg bg-[#eb1c31] text-[${color}] p-3`}>
      <h1 className="text-xl font-semibold tracking-wider">{title}</h1>
      <h1 className="text-2xl font-bold">{content}</h1>
    </div>
  );
};

export default Card;
