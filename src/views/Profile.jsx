import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../components/Profile/ProfileForm.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TranslationOutput from "../components/Translations/TranslationForm";
import Translation from './Translation';
import withAuth from "../hoc/withAuth";

const Profile = (props) =>{
const [showLogoutMenu,setLogoutMenuBool] = useState(false);
const [translationText,setToClickedTranlation] = useState("")

const showLogout = () =>{
   return showLogoutMenu ? setLogoutMenuBool(false) : setLogoutMenuBool(true)
                    
}
const logOut = () =>{
    console.log("logging out");
    
}
let translationHistory =["Lasse er tarvelig","To Be or not To be... why is that a question?","What is the meaning of life?","Should i fear my own shadow?","can a car run on pepsi?","Is the earth triangular?","Is gravity even real?","How best to get rid of a corpse in minecraft","Was 9/11 done by aliens?","does looking into the screen give you square shaped eyes?","Should we sniff our own farts to save the climate?"];

const goToTranslation = (translation) =>{
    
    setToClickedTranlation(translation)
    console.log("yay");
    
    return (
        <div>
            <Translation profileName ={props.profileName}/>
            <TranslationOutput translation = {translation}/>
            {console.log(translation)}
        </div>
    )
    
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
    <h5 className="translationPageHeaderSmall">Profile Page</h5>
        
    </Col>
    
    <Col  className="profileCol" xs={5}>
        
            <img className="profileIcon" onClick={showLogout} src="https://icons-for-free.com/iconfiles/png/512/circle+face+human+profile+user+icon-1320086209603424640.png"></img>
        
        <h4  className="profileName">{props.profileName}</h4>
        {showLogoutMenu ? <h4 onClick={logOut}  className="profileLogOut">Log Out</h4> : ""}
        <p>{"bool: "+showLogoutMenu}</p>
    </Col>
    <Col xs={2}></Col>
    </Row>
    
    <Row className="profileBody1RowContainer">
    <Col xs={2}></Col>
    
    
    <Col xs={8} className="translationHistoryBox" >
        <h3 className="translationHistoryText" >Translation History</h3>
      
        {translationHistory.map((element, index) => {
                
                return(
                <div key={index}>
                    <Row >
                        <Col xs={12}>
                        <Button className="goTotranslationBtn" onClick={() => goToTranslation(element)}><img className="translationInputSubmitBtnArrow" src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"></img></Button>
                        <h4 className="goTotranslationTextField">{element}</h4>
                        </Col>
                    </Row>
                </div>    
                
                );
                }
            )
        }
    </Col>  
    <Col xs={2}></Col>
    
    </Row>
    </Container>
)
}

export default withAuth(Profile)