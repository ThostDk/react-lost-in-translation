import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Profile/ProfileForm.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TranslationOutput from "./translationOutput";


const ProfilePage = (props) =>{
let showLogoutMenu = true;
const showLogout = () =>{
    console.log("HAHAHAHAHA");
    
    return showLogoutMenu ? !showLogoutMenu : showLogoutMenu
}
    
return (

    <Container fluid className="profilePageContainer">
    <Row className="profileHeaderTopBarRow">
    <Col xs={2}>
    </Col>
    <Col className="robotLogoImgColOverride" xs={1}>
    <img className="robotLogoImg"  src="https://i0.wp.com/inviianalytics.com/wp-content/uploads/2022/10/INVII-Analytics-Linkedin-Banner-1128-%C3%97-191-px-1800-%C3%97-900-px-2-e1666748650161.png?fit=432%2C490&ssl=1"></img>
    </Col>
    <Col xs={2}>
    <h5 className="translationPageHeaderSmall">Lost in Translation</h5>
        
    </Col>
    
    <Col  className="profileCol" xs={5}>
        
            <img className="profileIcon" onClick={showLogout} src="https://icons-for-free.com/iconfiles/png/512/circle+face+human+profile+user+icon-1320086209603424640.png"></img>
        
        <h4 className="profileName">{props.profileName}</h4>
        {showLogoutMenu ? <h4 className="profileLogOut">Log Out</h4> : ""}
        
    </Col>
    <Col xs={2}></Col>
    </Row>
    
    <Row className="profileBody1RowContainer">
    <Col xs={2}></Col>
    
    
    <Col xs={8} className="translationHistoryBox" >
        <h3 className="translationHistoryText" >Translation History</h3>
        <Row>
        <Col xs={12}>
        <Button className="goTotranslationBtn"><img className="translationInputSubmitBtnArrow" src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"></img></Button>
        <h4 className="goTotranslationTextField">To Be or not To be... why is that a question?</h4>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <Button className="goTotranslationBtn"><img className="translationInputSubmitBtnArrow" src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"></img></Button>
        <h4 className="goTotranslationTextField">What is the meaning of life?</h4>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <Button className="goTotranslationBtn"><img className="translationInputSubmitBtnArrow" src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"></img></Button>
        <h4 className="goTotranslationTextField">Should i fear my own shadow?</h4>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <Button className="goTotranslationBtn"><img className="translationInputSubmitBtnArrow" src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"></img></Button>
        <h4 className="goTotranslationTextField">can a car run on pepsi?</h4>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <Button className="goTotranslationBtn"><img className="translationInputSubmitBtnArrow" src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"></img></Button>
        <h4 className="goTotranslationTextField">Is the earth triangular?</h4>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <Button className="goTotranslationBtn"><img className="translationInputSubmitBtnArrow" src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"></img></Button>
        <h4 className="goTotranslationTextField">Is gravity even real?</h4>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <Button className="goTotranslationBtn"><img className="translationInputSubmitBtnArrow" src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"></img></Button>
        <h4 className="goTotranslationTextField">How best to get rid of a corpse in minecraft</h4>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <Button className="goTotranslationBtn"><img className="translationInputSubmitBtnArrow" src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"></img></Button>
        <h4 className="goTotranslationTextField">Was 9/11 done by aliens?</h4>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <Button className="goTotranslationBtn"><img className="translationInputSubmitBtnArrow" src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"></img></Button>
        <h4 className="goTotranslationTextField">does looking into the screen give you square shaped eyes?</h4>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <Button className="goTotranslationBtn"><img className="translationInputSubmitBtnArrow" src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"></img></Button>
        <h4 className="goTotranslationTextField">Should we sniff our own farts to save the climate?</h4>
        </Col>
        </Row>
    </Col>
    <Col xs={2}></Col>
    
    </Row>
    </Container>
)
}





export default ProfilePage