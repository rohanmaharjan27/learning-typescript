import React from "react";
import "./App.css";
import PassingProps from "./pages/PassingProps";
import TestCounter from "./pages/TestCounter";

function App() {
  return (
    <div className="App">
      <TestCounter />
      <PassingProps firstName="Rohan" lastName="Maharjan" />
      {/* <ReducerExample /> */}
    </div>
  );
}

export default App;
