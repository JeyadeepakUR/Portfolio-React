import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpeg";
import projImg4 from "../assets/img/project-img4.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Course Recommender",
      description: "ML, Data Analaytics",
      imgUrl: projImg1,
      url: "https://github.com/JeyadeepakUR/Course-Recommender-App",
    },
    
    {
      title: "Ecorewards",
      description: "Web3, Web development",
      imgUrl: projImg4,
      url: "https://github.com/JeyadeepakUR/Course-Recommender-App",

    },
    {
      title: "Skart",
      description: "Ml, computer vision",
      imgUrl: projImg3,
      url: "https://github.com/JeyadeepakUR/Smart-shopping-cart"
    },
    {
      title: "Synectt",
      description: "Android app, flutter",
      imgUrl: projImg2,
      url:"https://github.com/Appministrators/Synnectt"
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>For All projects.<a href="https://github.com/JeyadeepakUR">Github</a></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
