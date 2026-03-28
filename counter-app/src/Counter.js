import Buttons from "./Buttons";

const Counter = ({ val, handleDecrement, handleIncrement }) => {
  return (
    <div className="Counter">
      <h1>{val}</h1>
      <Buttons
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Buttons>
    </div>
  );
};

export default Counter;
