import React, { useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text?: string;
  ok?: boolean;
  i?: number;
  fn?: (fname: string) => string;
  person?: Person;
}

function TestCounter(props: Props) {
  const [counter, setCounter] = useState<number>(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    } else {
      alert("Minimum value reached!");
    }
  };

  const increaseCounterby5 = () => {
    setCounter(counter + 5);
  };

  const decreaseCounterby5 = () => {
    if (counter >= 5) {
      setCounter(counter - 5);
    } else {
      alert("Minimum value reached!");
    }
  };

  return (
    <div>
      <div>Counter: {counter}</div>
      <div>
        <button onClick={increaseCounter}>Increase Counter by 1</button>
        <button onClick={decreaseCounter}>Decrease Counter by 1</button>
        <button onClick={increaseCounterby5}>Increase Counter by 5</button>
        <button onClick={decreaseCounterby5}>Decrease Counter by 5</button>
      </div>
    </div>
  );
}

export default TestCounter;
