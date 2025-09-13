import React from "react";
import "./actionbutton.css";

const ActionsButtons = (porps) => {
  const { onIncrement, onDecrement } = porps;
  return (
    <div className="action-btn-container">
      <button className="increment-btn minus" onClick={onDecrement}>
        <i className="bi bi-dash-lg"></i>
      </button>
      <button className="increment-btn plus" onClick={onIncrement}>
        <i className="bi bi-plus-lg"></i>
      </button>
    </div>
  );
};

export default ActionsButtons;
