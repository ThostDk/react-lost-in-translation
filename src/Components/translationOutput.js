import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComponentCSS/translationPage.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const TranslationOutput = (props) =>{
let translation = props.translationResponse
//let translationArr = translation.split("");
console.log(translation)

    
return (

    <Container>
    
    <Row className="translationOutputRow">
    <Col xs={2}></Col>
    <Col xs={8} className="translationOutputBox" >
    
    <img className="handsignImg"src="./Resources/Handsigns/a.png"></img>
    

    </Col>
    <Col xs={2}></Col>
    </Row>
    </Container>
)
}





export default TranslationOutput