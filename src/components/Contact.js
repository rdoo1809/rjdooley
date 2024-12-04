import {Col, Container, Row} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";

export const Contact = () => {
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img src={contactImg} alt="Contact Me"/>
                    </Col>
                    <Col size={12} md={6}>
                        <div className={"tagline"}>
                            <h2>Get In Touch</h2>
                            <h3>I am always looking to connect with like minded individuals, mentors, and people who
                                enjoy development as much as I do.</h3>
                            <h3>Please do not hesitate to contact me</h3>
                            <h3>
                                <a target="_blank"
                                   href="mailto:rdooley5@outlook.com?subject=Hi%20Ryan...">rdooley5@outlook.com</a>
                            </h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
