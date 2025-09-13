import React from "react";
import "./Card.css";

const NumberCardComponent = (props) => {
  const { title, count, onReset } = props;

  return (
    <div className="card-container">
      <section className="card-title">
        <h1>{title}</h1>
      </section>
      <section className="card-body">
        <div className="card-message">
          <p className="msg-text">{count}</p>
        </div>
        {count > 0 && (
          <div className="btn-container">
            <button className="reset-btn" onClick={onReset}>
              <i className="bi bi-x-circle"></i>
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default NumberCardComponent;
