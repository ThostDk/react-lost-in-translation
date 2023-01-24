import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComponentCSS/translationPage.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const TranslationOutput = (props) =>{
console.log("outcome:" + props.translationOutput)
let translationArray = [];
translationArray = (props.translationOutput).split("");

let path = "";

return (
    
    <Container>
    <p>{props.translationOutput}</p>
    <Row className="translationOutputRow">
    <Col xs={2}></Col>
    <Col xs={8} className="translationOutputBox" >
    
    
    {translationArray.map((element, index) => {
            if(element ===" "){
                path = "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png";
            }
            else{
                path = "./Resources/Handsigns/" + element +".png";
            }
            return(
            <div key={index}>
                <img className="handsignImg"src={path}></img>
            </div>
            );
            
    })}

    </Col>
    <Col xs={2}></Col>
    </Row>
    
    </Container>
       );
}





export default TranslationOutput