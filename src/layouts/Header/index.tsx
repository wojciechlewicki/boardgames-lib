import { useState } from "react";

import SearchForm from "../../components/Navigation/SearchForm";
import MobileNavModal from "../../components/Navigation/MobileNavModal";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Hamburger } from "../../assets/Hamburger_menu.svg";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
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
