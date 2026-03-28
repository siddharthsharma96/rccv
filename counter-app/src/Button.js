const Button = ({ txt, func }) => {
  return <button onClick={func}>{txt}</button>;
};

export default Button;
