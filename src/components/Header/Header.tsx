import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Hamburger } from "../../assets/Hamburger_menu.svg";
//import { Link } from "react-router-dom"

import classes from "./Header.module.css";
import Wrapper from "../ui/Wrapper";

const Header = () => {
  return (
    <header className={`${classes.header} outer-wrapper`}>
      <Wrapper>
        <div className="flex-row-center">
          <Hamburger />
          <Logo />
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
