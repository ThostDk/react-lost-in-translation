import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComponentCSS/loginPage.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const LoginPage = (props) =>{

const [input,setParagraph] = useState("")
const handleInput = e => {
    setParagraph(e.target.value)
    
    console.log("blah")
}
const FinalizeInput = () => {
    props.setResponse(input)
    this.setState({
        showComponent: false,
    }) 
}
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
        <img className="loginRobotImg"  src="https://i0.wp.com/inviianalytics.com/wp-content/uploads/2022/10/INVII-Analytics-Linkedin-Banner-1128-%C3%97-191-px-1800-%C3%97-900-px-2-e1666748650161.png?fit=432%2C490&ssl=1"></img>
    </Col>
    
    <Col xs={5}>
        <h1 className="headline">Lost in Translation</h1>
        <h3 className="headlineSubtext">Get started</h3>

    </Col>
    <Col xs={2}></Col>
    </Row>
    <Row className="loginInputRowContainer">
    <Col xs={2}></Col>
    
    <Col className="inputBarContainer"  xs={8}>
            <p>{input}</p>
            <img className="loginInputFieldImg" src = "https://icons.iconarchive.com/icons/icons8/ios7/512/Computer-Hardware-Keyboard-icon.png"></img>
            <input  type="text" className="loginInputBar" placeholder={props.inputPlaceholder} onChange={e => handleInput(e)}/>
            <Button className="loginInputSubmitBtn" onClick={FinalizeInput} ><img className="loginInputSubmitBtnArrow" src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"></img></Button>
        </Col>
    <Col xs={2}></Col>
    <Col xs={12}></Col>

    </Row>
    </Container>
)
}





export default LoginPage