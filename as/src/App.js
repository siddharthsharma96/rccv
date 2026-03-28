import "./App.css";
import GrandFather from "./GrandFather";
// import Comp1, { Comp4, Comp5 } from "./Comp1";
// import Comp2 from "./Comp2";
// import { Comp3 } from "./Comp3";
// import Comp6 from "./Comp6";

function App() {
  let myWill = 1000;
  return (
    <div className="App">
      <h1>Welcome to Codehub Nexus </h1>
      <GrandFather myWill={myWill}></GrandFather>
    </div>
  );
}

export default App;
