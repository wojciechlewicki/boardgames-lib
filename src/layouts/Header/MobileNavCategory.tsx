import { Link } from "react-router-dom";
import { MobileNavCategoryProps } from "./types";

import { ReactComponent as ExpandArrow } from "../../assets/Expand_arrow.svg";
import classes from "./MobileNavCategory.module.css";

const MobileNavCategory: React.FC<MobileNavCategoryProps> = ({
  name,
  links,
  isOpen,
  setShow,
}) => {
  const handleExpand = () => {
    if (isOpen) {
      setShow(null);
    } else {
      setShow(name);
    }
  };

  return (
    <li>
      <button
        className={`${classes.mobileNavElement} ${classes.mobileNavButton} ${
          isOpen ? classes.mobileNavButtonOpen : ""
        }`}
        onClick={handleExpand}
      >
        {name} <ExpandArrow className={classes.mobileNavButtonIcon} />
      </button>
      <ul className={`${classes.mobileNavList} ${isOpen ? classes.open : ""}`}>
        {links.map((link) => {
          return (
            <li key={link.name} className={classes.mobileNavElement}>
              <Link to={link.to}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default MobileNavCategory;
