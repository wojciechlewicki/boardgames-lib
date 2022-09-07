import { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import MobileNavCategory from "../MobileNavCategory";
import { MobileNavCategories } from "../types";
import classes from "./style.module.css";

const navBarCategories: MobileNavCategories[] = [
  {
    name: "Browse",
    links: [
      { name: "Games", to: "/games" },
      { name: "Categories", to: "/categories" },
      { name: "Publishers", to: "/publishers" },
      { name: "Authors", to: "/authors" },
      { name: "Mechanics", to: "/mechanics" },
      { name: "Designers", to: "/designers" },
    ],
  },
  {
    name: "Forums",
    links: [
      { name: "Todo1", to: "/404" },
      { name: "Todo2", to: "/404" },
      { name: "Todo3", to: "/404" },
      { name: "Todo4", to: "/404" },
    ],
  },
  {
    name: "Community",
    links: [
      { name: "Todo1", to: "/404" },
      { name: "Todo2", to: "/404" },
      { name: "Todo3", to: "/404" },
      { name: "Todo4", to: "/404" },
    ],
  },
  {
    name: "Help",
    links: [
      { name: "Todo1", to: "/404" },
      { name: "Todo2", to: "/404" },
      { name: "Todo3", to: "/404" },
      { name: "Todo4", to: "/404" },
    ],
  },
];

interface MobileNavModalProps {
  isOpen: boolean;
}

const MobileNavModal: React.FC<MobileNavModalProps> = ({ isOpen }) => {

  const [showItem, setShowItem] = useState<String | null>(null);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <nav
          className={`${classes.mobileNav} ${isOpen && classes.mobileNavOpen}`}
        >
          <ul className={classes.mobileNavList}>
            {navBarCategories.map((navBarCategory) => {
              return (
                <MobileNavCategory
                  key={navBarCategory.name}
                  name={navBarCategory.name}
                  links={navBarCategory.links}
                  isOpen={showItem === navBarCategory.name}
                  setShow={setShowItem}
                />
              );
            })}
          </ul>
        </nav>,
        document.getElementById("nav-root")!
      )}
    </Fragment>
  );
};

export default MobileNavModal;
