import classes from "./styles.module.css";

type Props = {
  children?: React.ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default Wrapper;
