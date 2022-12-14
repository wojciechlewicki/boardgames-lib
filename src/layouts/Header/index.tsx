import { useState } from "react";

import SearchForm from "./SearchForm";
import MobileNavModal from "./MobileNavModal";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Hamburger } from "../../assets/Hamburger_menu.svg";
import { Link } from "react-router-dom";

import classes from "./index.module.css";
import Wrapper from "../../components/ui/Wrapper";

const Header = () => {
  const [mobileNavBarOpen, setMobileNavBarOpen] = useState(false);

  const handleNavToogle = () => {
    setMobileNavBarOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <header className={`${classes.header} outer-wrapper`}>
      <Wrapper>
        <MobileNavModal isOpen={mobileNavBarOpen} />
        <div className={`${classes.headerLogoSignUp} flex-row-center`}>
          <div className="flex-row-center">
            <button onClick={handleNavToogle} className={classes.headerIcon}>
              <Hamburger />
            </button>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="flex-row-center">
            <Link to="register" className={classes.headerIcon}>
              Sign In
            </Link>
            <Link to="login">Sign Up</Link>
          </div>
        </div>
        <SearchForm />
      </Wrapper>
    </header>
  );
};

export default Header;
