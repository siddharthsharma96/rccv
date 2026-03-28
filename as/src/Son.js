import GrandSon from "./GrandSon";

const Son = ({ as }) => {
  return (
    <div className="a">
      <h1>Son Component</h1>
      <h2>{as}</h2>
      <GrandSon myWill={as}></GrandSon>
    </div>
  );
};

export default Son;
