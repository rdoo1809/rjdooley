import {Col, Container, Row} from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-3">
            <div className="social-icon">
              <a href="https://github.com/rdoo1809" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/ryan-dooley-1713541a8/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://g.dev/rdooley" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>RJ Dooley 2025.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
