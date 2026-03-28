import Father from "./Father";

const GrandFather = (props) => {
  return (
    <div className="a">
      <h1>Grandfather Component</h1>
      <h2>{props.myWill}</h2>
      <Father as={props.myWill}></Father>
    </div>
  );
};

export default GrandFather;
