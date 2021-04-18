import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (isAdd) => {
    setCounter(isAdd ? counter + 1 : counter - 1);
  };

  return (
    <div className="container has-text-centered">
      <div className="columns mt-2 is-centered">
        <div className="column is-1">
          <button
            className="button mr-1"
            onClick={() => {
              handleCounter(false);
            }}
            data-testid="decrement"
          >
            -1
          </button>
        </div>
        <div className="column is-2">
          <h1 data-testid="counter" className="is-size-3 has-text-centered">
            Counter: {counter}
          </h1>{" "}
        </div>
        <div className="column is-1">
          <button
            className="button"
            onClick={() => {
              handleCounter(true);
            }}
            data-testid="increment"
          >
            +1
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Counter;
