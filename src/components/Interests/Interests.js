import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import gaming from "../../Assets/Interests/gaming.png";
import sports from "../../Assets/Interests/sports.png";
import coding from "../../Assets/Interests/coding.png";
import science from "../../Assets/Interests/science.png";


function Interests() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          What Else <strong className="purple"> I do </strong>
        </h1>
        <p style={{ color: "white" }}>
          Being able to study at school, exercise my body and entertain myself with several activities is an important key to productivity and creativity, that is why I make sure to stay productive and enjoy my time as an engineering student
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gaming}
              isBlog={false}
              title="Video Games"
              description="I am passionate about competitive video games, especially FPS games, which requires strategy and good reflexes. I have been an in game leader for competitive teams in order to deploy strategies to win our games."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sports}
              isBlog={false}
              title="Sports"
              description="Since my childhood, I have been passionate about sports especially football."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coding}
              isBlog={false}
              title="Coding"
              description="There are so many things to love about coding, both from a technical and philosophical perspective. It can sharpen your mind, rewire your brain, provide people with great software... the options and impact are nearly endless. Programming can really empower to change the world."           
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={science}
              isBlog={false}
              title="Science"
              description="I am interested in all forms of science, but mathematics are special, that's why after high school, I chose to pursuit a two-year intensive program of preparatory classes to the competitive entrance exams to the top engineering schools."           
            />
          </Col>
    
        </Row>
      </Container>
    </Container>
  );
}

export default Interests;
