import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Learning Routing</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
