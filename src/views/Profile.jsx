import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Profile/ProfileForm.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TranslationOutput from "../components/Translations/TranslationForm";
import Translation from "./Translation";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKey";
import withAuth from "../hoc/withAuth";
import { selectedtranslationAdd } from "../api/Translate";
const Profile = (props) => {
  const [showLogoutMenu, setLogoutMenuBool] = useState(false);
  const [translationText, setToClickedTranlation] = useState("");
  const { user, setUser } = useUser();

  const showLogout = () => {
    return showLogoutMenu ? setLogoutMenuBool(false) : setLogoutMenuBool(true);
  };
  const handleLogOut = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      storageSave(STORAGE_KEY_USER, null);
      user(null);
    }
  };
  //get translation history from API
  let translationHistory = user.translations;

  const goToTranslation = async (translation) => {
    const [error, UpdatedUser] = await selectedtranslationAdd(
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
          {showLogoutMenu ? (
            <h4 onClick={handleLogOut} className="profileLogOut">
              Log Out
            </h4>
          ) : (
            <h4 className="profileName">{user.username}</h4>
          )}
          
          
        </Col>
        <Col xs={2}>
        
        </Col>
      </Row>

      <Row className="profileBody1RowContainer">
        <Col xs={2}></Col>

        <Col xs={8} className="translationHistoryBox">
          <h3 className="translationHistoryText">Translation History</h3>

          {translationHistory.map((element, index) => {
            return (
              <div key={index}>
                <Row>
                  <Col xs={12}>
                    <NavLink to="/translator">
                      <Button
                        className="goTotranslationBtn"
                        onClick={() => goToTranslation(element)}
                      >
                        <img
                          className="translationInputSubmitBtnArrow"
                          alt={element}
                          src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"
                        ></img>
                      </Button>
                    </NavLink>
                    <h4 className="goTotranslationTextField">{element}</h4>
                 
                  </Col>
                </Row>
              </div>
            );
          })}
          <Row>
          <Col xs={12}>
                    <Button className="clearHistoryBtn">CLEAR HISTORY</Button>
                  </Col>
          </Row>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
};

export default withAuth(Profile);
