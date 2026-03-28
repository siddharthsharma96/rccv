import Son from "./Son";

const Father = ({ as }) => {
  return (
    <div className="a">
      <h1>father Component</h1>
      <h2>{as}</h2>
      <Son as={as}></Son>
    </div>
  );
};

export default Father;
