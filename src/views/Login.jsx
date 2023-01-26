import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  const onSuccess = () => {};
  return (
    <>
      <LoginForm success={onSuccess} />
    </>
  );
};
export default Login;
