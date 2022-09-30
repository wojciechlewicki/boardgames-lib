import CredentialsForm from "../../components/shared/CredentialsForm";
import { useLoginWithEmail } from "./hooks";

const Login = () => {
  const {data, isLoading} = useLoginWithEmail();

  if(isLoading) {
    return <div>Data fetching</div>
  }
  console.log(data);
  return <CredentialsForm info="Login with email and password" />;
};

export default Login;
