import React from "react";
import "./App.css";
import PassingProps from "./pages/PassingProps";
import TestCounter from "./pages/TestCounter";

function App() {
  // for (let i = 1; i <= 100; i++) {
  //   if (i % 3 === 0 && i % 5 === 0) {
  //     console.log("FizzBuzz");
  //   } else if (i % 3 === 0) {
  //     console.log("Fizz");
  //   } else if (i % 5 === 0) {
  //     console.log("Buzz");
  //   } else {
  //     console.log(i);
  //   }
  // }
  return (
    <div className="App">
      <TestCounter />
      <PassingProps firstName="Rohan" lastName="Maharjan" />
      {/* <ReducerExample /> */}
    </div>
  );
}

export default App;
