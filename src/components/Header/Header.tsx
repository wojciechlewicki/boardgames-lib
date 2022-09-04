import SearchForm from "./Navigation/SearchForm";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Hamburger } from "../../assets/Hamburger_menu.svg";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import Wrapper from "../ui/Wrapper";

const Header = () => {
  return (
    <header className={`${classes.header} outer-wrapper`}>
      <Wrapper>
        <div className="flex-row-center">
          <div className="flex-row-center">
            <Hamburger className={classes.headerIcon} />
            <Logo />
          </div>
          <div className="flex-row-center">
            <Link to="" className={classes.headerIcon}>
              Sign In
            </Link>
            <Link to="">Sign Up</Link>
          </div>
        </div>
        <SearchForm />
      </Wrapper>
    </header>
  );
};

export default Header;
