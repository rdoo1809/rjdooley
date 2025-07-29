import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "City Ground Band Site",
            description: "Design & Development. User able to manage site through BandPress dashboard.",
            imgUrl: projImg10,
            href: "https://rdoo1809.github.io/City-Ground-BandPress/",
            buttonText: "Site"
        },
        {
            title: "Invictus Athletics Club",
            description: "Development & Ongoing Care",
            imgUrl: projImg1,
            href: "https://invictusathletics.ca/",
            buttonText: "Site"
        },
        {
            title: "KA2EN Records, Cairo Egypt",
            description: "Development & Ongoing Care",
            imgUrl: projImg2,
            href: "https://ka2enrecords.com/",
            buttonText: "Site"
        },
        {
            title: "rjdooley Business Site",
            description: "Design & Development",
            imgUrl: projImg3,
            href: "https://rjdooley.ca/business",
            buttonText: "Site"

        },
    ];

    const unityProjects = [
        {
            title: "Respiratory Therapy DLX",
            description: "C# Developer on CVRI project to build a training simulation for Conestoga's Respiratory Therapy program.",
            imgUrl: projImg12,
            href: "https://github.com/CC-Open-Learning/DLX-respiratory-therapy",
            buttonText: "Github Repo"
        },
        {
            title: "Fire Extinguisher Training Sim",
            description: "Orientation project completed to learn Unity fundamentals.",
            imgUrl: projImg11,
            href: "https://rdoo1809.github.io/Fire-Extinguisher-Sim-Web/",
            buttonText: "Web Build"
        },
        {
            title: "Crate Ninja",
            description: "Fruit Ninja style Unity game. Play the web build!",
            imgUrl: projImg13,
            href: "https://rjdooley.ca/crate_ninja_web/",
            buttonText: "Web Build"
        },
    ];

    const webProjects = [
        {
            title: "BandPress",
            description: "Work In Progress. Currently supports one user managing aspects of their linked site.",
            imgUrl: projImg6,
            href: "https://band-press-main-7qzk6r.laravel.cloud",
            buttonText: "Site"
        },
        {
            title: "Project Manager",
            description: "Laravel + Vue - As a privileged user, create new projects, add subtasks, assign to team members, resolve tasks and projects.",
            imgUrl: projImg7,
            href: "https://github.com/rdoo1809/Laravel-Project-Manager",
            buttonText: "Github Repo"
        },
        {
            title: "Course Enroller",
            description: "C# Asp.Net Core - Administrators can manage their courses, students, enrolment, send confirmation emails, store session information.",
            imgUrl: projImg4,
            href: "#",
            buttonText: "Github Repo"
        },
    ];


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
                                    Visit my Github to see everything I've been working on :D

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
                                            <Nav.Link eventKey="second">Unity Projects</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Web Apps</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp">
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {projects.map((project, index) => {
                                                    return <ProjectCard key={index} {...project} md={3}/>;
                                                })}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Row>
                                                {unityProjects.map((project, index) => {
                                                    return <ProjectCard key={index} {...project}/>;
                                                })}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <Row>
                                                {webProjects.map((project, index) => {
                                                    return <ProjectCard key={index} {...project}/>;
                                                })}
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