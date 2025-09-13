import React from "react";
import "./FancyCounter.css";
import NumberCardComponent from "../component/common/Card/NumberCardComponent";
import ActionsButtons from "./Actions/ActionsButtons";
const FancyCounterContainer = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="fancy-counter-container">
      <NumberCardComponent
        title={
          <>
            FANCY <br /> COUNTER
          </>
        }
        count={count}
        onReset={() => {
          setCount(0);
        }}
      />
      <ActionsButtons
        onIncrement={() => {
          setCount((prev) => prev + 1);
        }}
        onDecrement={() => {
          setCount((prev) => prev - 1);
        }}
      />
    </div>
  );
};

export default FancyCounterContainer;
