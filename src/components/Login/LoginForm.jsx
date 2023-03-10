import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import { loginUser } from "../../api/User";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKey";
import { useUser } from "../../context/UserContext";

// set some configuration properties for username
const usernameConfig = {
  required: true,
  minLength: 4,
};

const LoginForm = () => {
  //hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  // Local State
  const [loading, setLoading] = useState(false);

  //side effects
  useEffect(() => {
    if (user !==null) {
      navigate("/translator");
    }
  }, [user, navigate]);


  //Event handlers
  // submit the given username, which use destructor for getting the username
  const onSubmit = async({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error!==null) {
        alert(error); 
    }
    if (userResponse !== null) {
        storageSave(STORAGE_KEY_USER,userResponse);
        setUser(userResponse);
    }
    setLoading(false);
  };
  //Render Functions
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }

    if (errors.username.type === "required") {
      return <span className="userValidation">Username os required!!!</span>;
    }

    if (errors.username.type === "minLength") {
      return (
        <span className="userValidation">Username is too short(min. 4)!!!</span>
      );
    }
  })();
  return (
    <Container fluid className="loginNavContainer">
      <Row>
        <Col xs={2}></Col>
        <Col xs={3}>
          <h3 className="headerSmall">Lost in Translation</h3>
        </Col>
        <Col xs={5}></Col>
        <Col xs={2}></Col>
      </Row>
      <Row className="LostInTranslationHeadlineContainer">
        <Col xs={2}></Col>
        <Col xs={3}>
          <img
            alt="The application logo"
            className="loginRobotImg"
            src="https://i0.wp.com/inviianalytics.com/wp-content/uploads/2022/10/INVII-Analytics-Linkedin-Banner-1128-%C3%97-191-px-1800-%C3%97-900-px-2-e1666748650161.png?fit=432%2C490&ssl=1"
          ></img>
        </Col>

        <Col xs={5}>
          <h1 className="headline">Lost in Translation</h1>
          <h3 className="headlineSubtext">Get started</h3>
        </Col>
        <Col xs={2}></Col>
      </Row>
      <Row className="loginInputRowContainer">
        <Col xs={2}></Col>

        <Col className="inputBarContainer" xs={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <img
              alt="Icon for Input field"
              className="loginInputFieldImg"
              src="https://icons.iconarchive.com/icons/icons8/ios7/512/Computer-Hardware-Keyboard-icon.png"
            ></img>
            <label htmlFor="username"></label>
            <input
              type="text"
              className="loginInputBar"
              placeholder="What is your username?"
              {...register("username", usernameConfig)}
            />
            {errorMessage}
            <Button type="submit" disabled={ loading } className="loginInputSubmitBtn">
              <img
                alt="Icon for Login button"
                className="loginInputSubmitBtnArrow"
                src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"
              ></img>
            </Button>
          </form>
        </Col>
        <Col xs={2}></Col>
        <Col xs={12}></Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
