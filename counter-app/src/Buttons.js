import Button from "./Button";

const Buttons = ({ handleDecrement, handleIncrement }) => {
  return (
    <div className="ButtonContainer">
      <Button txt={"Increment"} func={handleIncrement}></Button>
      <Button txt={"Decrement"} func={handleDecrement}></Button>
    </div>
  );
};

export default Buttons;
