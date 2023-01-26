import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Translations/TranslationForm.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TranslationOutput from "./translationOutput";
import withAuth from "../hoc/withAuth";


const Translation = (props) =>{
const [translationResponse, setTranslationResponse] = useState("");    
const [input,setParagraph] = useState("")
const handleInput = e => {
    setParagraph(e.target.value)
}
const finalizeInput = () => {
    setTranslationResponse(input)
}

    
return (

    <Container fluid className="translationPageContainer">
    <Row className="headerTopBarRow">
    <Col xs={2}>
    </Col>
    <Col className="robotLogoImgColOverride" xs={1}>
    <img className="robotLogoImg"  alt="" src="https://i0.wp.com/inviianalytics.com/wp-content/uploads/2022/10/INVII-Analytics-Linkedin-Banner-1128-%C3%97-191-px-1800-%C3%97-900-px-2-e1666748650161.png?fit=432%2C490&ssl=1"></img>
    </Col>
    <Col xs={2}>
    <h5 className="translationPageHeaderSmall">Lost in Translation</h5>
        
    </Col>
    
    <Col  className="profileCol" xs={5}>
        <img className="profileIcon" alt="" src="https://icons-for-free.com/iconfiles/png/512/circle+face+human+profile+user+icon-1320086209603424640.png"></img>
        <h4 className="profileName">{props.profileName}</h4>
    </Col>
    <Col xs={2}></Col>
    </Row>
    
    <Row className="inputRowContainer">
    <Col xs={2}></Col>
    
    <Col xs={8}>
        
            <img className="translationInputFieldImg" alt="" src = "https://icons.iconarchive.com/icons/icons8/ios7/512/Computer-Hardware-Keyboard-icon.png"></img>
            <input  type="text" className="translationInputBar" placeholder="Translate Text here" onChange={e => handleInput(e)}/>
            <Button className="translationInputSubmitBtn" onClick={finalizeInput} ><img className="translationInputSubmitBtnArrow" alt="" src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"></img></Button>
        </Col>
    <Col xs={2}></Col>
    
    </Row>
    <TranslationOutput translationOutput={translationResponse}/>
     
    
    </Container>
)
}

export default withAuth(Translation)