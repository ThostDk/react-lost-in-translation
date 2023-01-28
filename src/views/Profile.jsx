import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Profile/Profile.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import withAuth from "../hoc/withAuth";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKey";
import { selectedTranslationAdd } from "../api/Translate";
import { translationClearHistory } from "../api/Translate";

// The profile component which displays the user profile with an overview of its translation history
const Profile = ( ) => {
  const [showLogoutMenu, setLogoutMenuBool] = useState(false);
  const { user, setUser } = useUser();

  // Boolean function for toggling between displaying the logout button by returning the opposite value when clicking on the profile icon.
  const showLogout = () => {
    return showLogoutMenu ? setLogoutMenuBool(false) : setLogoutMenuBool(true);
  };
  // Function for logging out the user when clicking the log out button.
  const handleLogOut = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      storageSave(STORAGE_KEY_USER, null);
      setUser(null);
    }
  };
  // Gets translation history from the current user API
  let translationHistory = user.translations;
  // function that clears the users translation history when clicking the clear history button
  const clearTranslationHistory = async () => {
    if (!window.confirm("Are you sure? \nThis can not be undone!")) {
      return;
    }
    // tries to call the api function for clearing the users translation list
    const [clearError] = await translationClearHistory(user.id);
    if (clearError !== null) {
      return;
    }
    const updatedUser = {
      ...user,
      translations: [],
    };
    // if it succeed then the session storage & current user will point to the updated user with the now empty history
    storageSave(STORAGE_KEY_USER, updatedUser);
    setUser(updatedUser);
  };

  // function that sets the users selected translation that is to be displayed to the clicked history translation
  const setSelectedTranslation = async (translation) => {
    const [error, UpdatedUser] = await selectedTranslationAdd(
      user,
      translation
    );
    if (error !== null) {
      return;
    }
    storageSave(STORAGE_KEY_USER, UpdatedUser);
    setUser(UpdatedUser);
  };

  return (
    <Container fluid className="profilePageContainer">
      <Row className="profileHeaderTopBarRow">
        <Col xs={2}></Col>
        <Col className="robotLogoImgColOverride" xs={1}>
          <img
            alt="logoImg"
            className="robotLogoImg"
            src="https://i0.wp.com/inviianalytics.com/wp-content/uploads/2022/10/INVII-Analytics-Linkedin-Banner-1128-%C3%97-191-px-1800-%C3%97-900-px-2-e1666748650161.png?fit=432%2C490&ssl=1"
          ></img>
        </Col>
        <Col xs={2}>
          <h5 className="translationPageHeaderSmall">Profile Page</h5>
        </Col>

        <Col className="profileCol" xs={5}>
          <img
            className="profileIcon"
            onClick={showLogout}
            alt="profileImg"
            src="https://icons-for-free.com/iconfiles/png/512/circle+face+human+profile+user+icon-1320086209603424640.png"
          ></img>
          {/* Toggle between showing/hiding the logout button when clicking the profile icon */}
          {showLogoutMenu ? 
            (<h4 onClick={handleLogOut} className="profileLogOut">Log Out</h4>) 
          : (<h4 className="profileName">{user.username}</h4>)}
        </Col>
        <Col xs={2}></Col>
      </Row>

      <Row className="profileBody1RowContainer">
        <Col xs={2}></Col>

        <Col xs={8} className="translationHistoryBox">
          <h3 className="translationHistoryText">Translation History</h3>
            {/* goes through every user translation history element and displays it in the history box   */}
          {translationHistory.map((element, index) => {
            return (
              <div key={index}>
                <Row>
                  <Col xs={12}>
                    <NavLink to="/translator">
                      <Button
                        className="seeSelectedTranslationBtn"
                        onClick={() => setSelectedTranslation(element)}
                      >
                        <img
                          className="translationInputSubmitBtnArrow"
                          alt={element}
                          src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"
                        ></img>
                      </Button>
                    </NavLink>
                    <h4 className="seeSelectedTranslationTextField">
                      {element}
                    </h4>
                  </Col>
                </Row>
              </div>
            );
          })}
          <Row>
            <Col xs={6}>
              <NavLink to="/translator">
                <Button 
                className="goToTranslationPageBtn">Go to Translation
                </Button>
              </NavLink>
            </Col>
            <Col xs={6}>
              <Button
                className="clearHistoryBtn"
                onClick={clearTranslationHistory}>CLEAR HISTORY
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
};

export default withAuth(Profile);
