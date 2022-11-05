import React from "react";

function Card({ children, className }) {
  return (
    <div className={className + " border-black border-2 rounded-md"}>
      {children}
    </div>
  );
}

export default Card;
