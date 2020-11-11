import React from "react";

const Card = (props) => {
  return <div className="bg-gray-800 rounded shadow">{props.children}</div>;
};

export default Card;
