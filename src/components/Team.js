import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Card } from "./Cards";
import projImg1 from "../assets/images/project-img5.jpg";
import projImg2 from "../assets/images/project-img5.jpg";
import projImg3 from "../assets/images/project-img5.jpg";
import projImg4 from "../assets/images/project-img5.jpg";
import projImg5 from "../assets/images/project-img5.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Team = () => {

  const projects = [
    {
      title: "Sampuran Kishore Shrivastav",
      description: "",
      imgUrl: projImg1,
    },
    {
      title: "Akanksha Mishra",
      description: "",
      imgUrl: projImg2,
    },
    {
      title: "Sumit Sharma",
      description: "",
      imgUrl: projImg3,
    },
    {
      title: "Supriya Rai",
      description: "",
      imgUrl: projImg4,
    },
    {
      title: "Sunaina Rustagi",
      description: "",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Team</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Card
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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