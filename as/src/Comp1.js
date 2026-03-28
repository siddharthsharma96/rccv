const Comp1 = (props) => {
  console.log(props);

  return (
    <div>
      <h1>My New Component</h1>
      <p>
        My value is {props.aa} and it iosn {props.ab}
      </p>
    </div>
  );
};

export default Comp1;

export const Comp4 = () => {
  return (
    <div>
      <h1>My New Component</h1>
    </div>
  );
};

export const Comp5 = () => {
  return (
    <div>
      <h1>My New Component</h1>
    </div>
  );
};
