import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Translations/Translation.css";
import {Container, Col, Row} from "react-bootstrap";
import TranslationForm from "../components/Translations/TranslationForm";
import TranslationOutput from "../components/Translations/TranslationOutput";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { selectedTranslationAdd, translationAdd } from "../api/Translate"
import { storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKey";
import { NavLink } from "react-router-dom";
import withAuth from "../hoc/withAuth"

const Translation = () => {
  const [translationResponse, setTranslationResponse] = useState("");
  const { user, setUser } = useUser();

  const resetSelection = async()=>{
    const [error, UpdatedUser] = await selectedTranslationAdd(user, "");
      if (error !== null) {
        return;
      }
      storageSave(STORAGE_KEY_USER, UpdatedUser);
      setUser(UpdatedUser);
  }

  const getSelectedTranslationHistory = async (user) => {
    if (user.selectedTranslation !== "") {
      setTranslationResponse(user.selectedTranslation);
      resetSelection();
    }
  };

  useEffect(() => {
    getSelectedTranslationHistory(user);
  });

  const handleTranslatorClicked = async (sentence) => {
    if (sentence.length === 0) return;
    setTranslationResponse(sentence);
    const [error, UpdatedUser] = await translationAdd(user, sentence);
    if (error !== null) {
      return;
    }
    storageSave(STORAGE_KEY_USER, UpdatedUser);
    setUser(UpdatedUser);
  };

  return (
    <Container fluid className="translationPageContainer">
      <Row className="headerTopBarRow">
        <Col xs={2}></Col>
        <Col className="robotLogoImgColOverride" xs={1}>
          <img
            className="robotLogoImg"
            alt=""
            src="https://i0.wp.com/inviianalytics.com/wp-content/uploads/2022/10/INVII-Analytics-Linkedin-Banner-1128-%C3%97-191-px-1800-%C3%97-900-px-2-e1666748650161.png?fit=432%2C490&ssl=1"
          ></img>
        </Col>
        <Col xs={2}>
          <h5 className="translationPageHeaderSmall">Lost in Translation</h5>
        </Col>

        <Col className="profileCol" xs={5}>
          <NavLink to="/profile">
            <img
              className="profileIcon"
              alt=""
              src="https://icons-for-free.com/iconfiles/png/512/circle+face+human+profile+user+icon-1320086209603424640.png"
            ></img>
          </NavLink>
          <h4 className="profileName">{user.username}</h4>
        </Col>
        <Col xs={2}></Col>
      </Row>

      <Row className="inputRowContainer">
        <Col xs={2}></Col>

        <Col xs={8}>
          <TranslationForm onTranslate={handleTranslatorClicked} />
        </Col>
        <Col xs={2}></Col>
      </Row>
      <TranslationOutput translationOutput={translationResponse} />
    </Container>
  );
};

export default withAuth(Translation);
