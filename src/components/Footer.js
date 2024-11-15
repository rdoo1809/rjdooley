import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {

  const rowStyle = {
  marginTop: '2rem'
  }
    

  return (
    <footer className="footer">
      <Container >
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div style={rowStyle} className="social-icon">
              <a href="https://github.com/rdoo1809" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/ryan-dooley-1713541a8/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://g.dev/rdooley" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
