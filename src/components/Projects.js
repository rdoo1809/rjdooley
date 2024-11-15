import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "animate.css";
import {Col, Container, Row} from "react-bootstrap";

export const Projects = () => {
    const projects = [
        {
            title: "Invictus Athletics Club",
            description: "Development & Ongoing Care",
            imgUrl: projImg1,
            href: "https://invictusathletics.ca/",
        },
        {
            title: "KA2EN Records, Cairo Egypt",
            description: "Development & Ongoing Care",
            imgUrl: projImg2,
            href: "https://ka2enrecords.com/",
        },
        {
            title: "rjdooley Business Site",
            description: "Design & Development",
            imgUrl: projImg3,
            href: "https://rjdooley.ca/business",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>

                        <div>
                            <div>
                                <h2>Projects</h2>
                                <p>
                                    Check out some of my favourite projects I have completed so
                                    far as a developer!
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
        ;
};
