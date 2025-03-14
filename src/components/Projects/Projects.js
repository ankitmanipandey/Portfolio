import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix_gemini from "../../Assets/Projects/netflix_gemini.png";
import todo from "../../Assets/Projects/todo.png";
import devconnect from "../../Assets/Projects/devconnect.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devconnect}
              isBlog={false}
              title="DevConnect"
              description="Built DevConnect, a social networking platform for developers to connect, collaborate, and share knowledge using MERN stack and Tailwind CSS. Integrated Stripe for premium memberships with verification badges and added real-time chat using Socket.io, along with secure RESTful APIs for authentication, profiles, posts, and messaging."
              ghLink="https://github.com/ankitmanipandey/devConnect"
              demoLink="https://devconnect-frontend-ozys.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix_gemini}
              isBlog={false}
              title="Netflix_Gemini"
              description="Streamlined a React-based Netflix clone, focusing on performance and user experience. Integrated Gemini for personalized movie suggestions using RESTful APIs. Implemented dynamic routing and state management with React Router and Redux for smooth navigation and real-time updates."
              ghLink="https://github.com/ankitmanipandey/Netflix_Gemini"
              demoLink="https://netflix-gemini-gamma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDo"
              description="A minimalist and efficient ToDo App built with React, allowing users to add, manage, and delete tasks with persistent storage via localStorage. Features an automatic Dark Mode after 5 PM and a responsive, user-friendly UI for seamless task management across devices."
              ghLink="https://github.com/ankitmanipandey/Todo_App"
              demoLink="https://todo-8zzmzgiwz-ankit-mani-pandeys-projects.vercel.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
