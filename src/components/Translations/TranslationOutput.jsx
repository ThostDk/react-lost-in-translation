import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "./Translation.css";

const TranslationOutput = (props) => {

  let translationArray = [];
  translationArray = props.translationOutput.toLowerCase().split("");
  let path = "";
  return (
    <Container>
      <Row className="translationOutputRow">
        <Col xs={2}></Col>
        <Col xs={8} className="translationOutputBox">
          {translationArray.map((letter, index) => {
            if (letter === " ") {
              path =
                "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png";
            }
            else if(letter.match(/[a-z1-9]/i)){
              path = "./Resources/HandSigns/" + letter + ".png";
            }
            else{
               path = "./Resources/HandSigns/!.png";
            }
            return (
              <div key={index}>
                <img className="handSignImg" alt="" src={path}></img>
              </div>
            );
          })}
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
};
export default TranslationOutput;
