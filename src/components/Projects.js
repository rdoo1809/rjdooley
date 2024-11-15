import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";

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
        {/* <Container> */}
        {/* <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                //<div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <div>
                  <h2>Projects</h2>
                  <p>
                    Check out some of my favourite projects I have completed so
                    far as a developer!
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row> */}
        {/* </Container> */}
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
