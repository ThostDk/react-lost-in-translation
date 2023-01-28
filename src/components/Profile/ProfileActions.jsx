import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { selectedTranslationAdd, translationClearHistory } from "../../api/Translate";
import { STORAGE_KEY_USER } from "../../const/storageKey";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";


const ProfileAction = () => {
  const { user, setUser } = useUser();
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
    <Container fluid >
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
  )
}
export default ProfileAction;