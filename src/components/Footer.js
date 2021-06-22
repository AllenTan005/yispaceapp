import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import personalData from "../assets/personalData";
//import "./Footer.css"
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  const [personalPhone, setPersonalPhone] = useState(true);
  const [personalEmail, setPersonalEmail] = useState(true);
  const [personalFacebook, setPersonalFacebook] = useState(true);
  const [personalInsta, setPersonalInsta] = useState(true);

  //phonenumber
  let phone = "tel:0903661308";
  let elementPhone = personalPhone ? (
    <a href={phone}>0903661308</a>
  ) : (
    <p>nth!</p>
  );

  //email
  let email = "mailto:allentkm9705@gmail.com";
  let elementMail = personalEmail ? (
    <a href={email}>allentkm9705@gmail.com</a>
  ) : (
    <p>nth!</p>
  );

  //facebook
  let facebook = "#";
  let elementFacebook = personalFacebook ? (
    <a href={facebook}> <AiOutlineFacebook /> </a>
  ) : (
    <p>nth!</p>
  );
  
//instagram
  let insta = "#";
  let elementInsta = personalInsta ? (
    <a href={insta}> <AiOutlineInstagram /> </a>
  ) : (
    <p>nth!</p>
  );



  return (
    <Container fluid style={{backgroundColor: "#343a40"}}>
      <Row>
        <Col className="footerText">
          <div
            style={{ marginLeft: "0", marginRight: "0", marginTop: "30px" }}
            className="footerSectionOne"
          >
            <div>
              <p style={{color: "#fff" }}>Email</p>
              {elementMail}
               <p style={{color: "#fff" }}>phone number</p>
              {elementPhone}
            </div>
            <div>
             {elementFacebook}
             {elementInsta}
             </div>
            <div>
              <p style={{color: "#fff" }}>
               <strong>Some text to fill up footer section</strong>  orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambledt make a type specimen book. It has
              </p>
            </div >
            <p style={{color: "#fff" }}> Copyright© 2021 Allen</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;