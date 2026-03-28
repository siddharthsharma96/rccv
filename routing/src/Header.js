import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to={"/"}>
        <img src="https://codehubnexus.com/assets/logov2-BR5dDC9U.png"></img>
      </NavLink>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>login</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
