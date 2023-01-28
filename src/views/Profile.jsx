import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Profile/Profile.css";
import { Col, Container, Row } from "react-bootstrap";
import withAuth from "../hoc/withAuth";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { storageDelete } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKey";
import ProfileAction from "../components/Profile/ProfileActions";

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
      storageDelete(STORAGE_KEY_USER, null);
      setUser(null);
    }
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
      <ProfileAction/>
    </Container>
  );
};

export default withAuth(Profile);
