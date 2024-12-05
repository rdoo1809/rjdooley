import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

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

    const cardStyle = {
        height: "300px",
    };

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            <div>
                                <h2>Projects</h2>
                                <p>
                                    Check out some of my favourite projects I have completed so
                                    far as a developer!
                                </p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav
                                        variant="pills"
                                        className="nav-pills mb-5 justify-content-center align-items-center"
                                        id="pills-tab"
                                    >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Live Sites</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Web Apps</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Other Projects</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp">
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {projects.map((project, index) => {
                                                    return <ProjectCard key={index} {...project} />;
                                                })}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Row>
                                                <Col size={12} sm={6} md={4}>
                                                    <div className="proj-imgbx">
                                                        <img src={projImg7}/>
                                                        <div className="proj-txtx">
                                                            <h4>Project Manager</h4>
                                                            <span>
                                  Laravel + Vue - As a privilidged user, create new projects,
                                  add subtasks, assign to team members, resolve tasks and projects.
                                </span>
                                                            <br></br>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col size={12} sm={6} md={4}>
                                                    <div className="proj-imgbx">
                                                        <img src={projImg4}/>
                                                        <div className="proj-txtx">
                                                            <h4>Course Enrolment App</h4>
                                                            <span>
                                  C# Asp.Net Core - Administrators can manage
                                  their courses, students, enrolment, send
                                  confirmation emails, store session
                                  information.
                                </span>
                                                            <br></br>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col size={12} sm={6} md={4}>
                                                    <div className="proj-imgbx">
                                                        <img src={projImg6}/>
                                                        <div className="proj-txtx">
                                                            <h4>Invoice Tracker App</h4>
                                                            <span>
                                  C# Asp.Net Core - Manage invoices for your
                                  customers. Add a new invoice or edit one,
                                  add/edit items, details, using complex EF core
                                  relationships.
                                </span>
                                                            <br></br>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <Row>
                                                <Col size={12} sm={6} md={4}>
                                                    <div className="proj-imgbx">
                                                        <img src={projImg5}/>
                                                        <div className="proj-txtx">
                                                            <h4>Javascript Online Book Store</h4>
                                                            <span>
                                  Vanilla JS - Add items and quantity to
                                  cart, filter by genre, view and add reviews.
                                </span>
                                                            <br></br>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col size={12} sm={6} md={4}>
                                                    <div className="proj-imgbx">
                                                        <img src={projImg8}/>
                                                        <div className="proj-txtx">
                                                            <h4>GC Mayhem Monogame</h4>
                                                            <span>
                                   C# Monogame - Top-down game with 2D animation,
                                   supports multiple ways to take and deal damage, enemy types, rounds,
                                   and a highscore leaderboard.
                                </span>
                                                            <br></br>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col size={12} sm={6} md={4}>
                                                    <div className="proj-imgbx">
                                                        <img src={projImg9}/>
                                                        <div className="proj-txtx">
                                                            <h4>Q Puzzle Game</h4>
                                                            <span>
                                  C# .Net - Design a level, save, load,
                                  and play. Puzzle game saves and
                                  records game information and stats.
                                </span>
                                                            <br></br>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};