import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed: ${count}`);
  }, [count]);

  const handleIncrement = () => {
    if (count >= 10) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Count cannot go below 0.");
    }
  };

  return (
    <div className="App">
      <Counter
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

export default App;
