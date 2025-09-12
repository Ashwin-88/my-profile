import React from "react";

export default function Tile({ icon, title, text, onClick }) {
  return (
    <div className="tile" onClick={onClick}>
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
