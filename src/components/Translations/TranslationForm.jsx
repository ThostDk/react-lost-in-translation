import "bootstrap/dist/css/bootstrap.min.css";
import "./TranslationForm.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useUser } from "../../context/UserContext";

const TranslationOutput = (props) => {
  const { user } = useUser();
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
              path = "./Resources/Handsigns/" + letter + ".png";
            }
            else{
               path = "./Resources/Handsigns/!.png";
            }
            return (
              <div key={index}>
                <img className="handsignImg" alt="" src={path}></img>
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
