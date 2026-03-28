import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  // UseState
  // 1. Simple Variable
  // 2. Function to uodate the value of first variable it should always start f4rom setVarianle
  let [val, setVal] = useState(0);
  // let val = 10;
  const handleIncrement = () => {
    setVal(val + 1);
    console.log(val);
  };
  const handleDecrement = () => {
    setVal(val - 1);
    console.log(val);
  };

  // UseEffect
  // 1. Callback Function
  // 2. Array Of Dependencies
  useEffect(() => {
    console.log("Hello World", val);
  });
  // 3 useCases
  // 1. UseCase with Empty array of depednecies
  // it will run only a single time

  // 2. Usecase with soME ARRAY OF DEPENDencies(state variables)
  // whenever that state or ddependecy will update

  // 3.UseCase without array of dependency
  // it will run first time and whenever any state is going to updatew
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter
        val={val}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
    </div>
  );
}

export default App;
