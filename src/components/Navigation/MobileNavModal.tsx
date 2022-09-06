import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./MobileNavModal.module.css";

interface MobileNavModalProps {
  isOpen: boolean;
}

const MobileNavModal: React.FC<MobileNavModalProps> = ({ isOpen }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <nav className={`${classes.mobileNav} ${isOpen && classes.mobileNavOpen}`}></nav>,
        document.getElementById("nav-root")!
      )}
    </Fragment>
  );
};

export default MobileNavModal;
