import classes from "./CredentialsForm.module.css";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

type CredentialsFormProps = {
  info: string;
};

const CredentialsForm: React.FC<CredentialsFormProps> = ({ info }) => {
  return (
    <section className={classes.credentials}>
      <Link to="/">
        <Logo className={classes.logo} />
      </Link>
      <form className={classes.credentialsForm}>
        <span className={classes.credentialsInfo}>{info}</span>
        <input
          type="email"
          placeholder="Email"
          className={classes.credentialsInput}
        />
        <input
          type="password"
          placeholder="Password"
          className={classes.credentialsInput}
        />
      </form>
    </section>
  );
};

export default CredentialsForm;
