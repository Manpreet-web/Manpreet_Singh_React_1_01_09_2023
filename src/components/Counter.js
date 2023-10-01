import React from 'react';

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="counter">
        <button onClick={onDecrement}>Decrement</button>
        <p>{count}</p>
        <button onClick={onIncrement}>Increment</button>
      </div>
      {count > 10 && (
        <button className="reset-button" onClick={() => onIncrement(0)}>
          GO BACK TO 0
        </button>
      )}
    </div>
  );
};

export default Counter;