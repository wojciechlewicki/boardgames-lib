import { Link } from "react-router-dom"
import { MobileNavCategoryProps } from "../../shared/interfaces/nav.interface";

const MobileNavCategory: React.FC<MobileNavCategoryProps> = ({
  name,
  links,
}) => {
  return (
    <li>
      <div>{name}</div>
      {links.map(link => {
        return <Link to={link.to}>{link.name}</Link>
      })}
    </li>
  );
};

export default MobileNavCategory;
