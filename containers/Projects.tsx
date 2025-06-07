import React from "react";
import { projects } from "../portfolio";
import { Container } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    projects && (
      <section className="section section-lg py-5">
        <Container>
          <div className="d-flex p-4 justify-content-center"> 
            {/* <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-laptop text-info" />
              </div>
            </div> */}
            <div className="pl-4">
              <h4 className="display-3 text-info">Some of My Side Projects</h4>
            </div> 
           </div>
          <div className="projects-container">
            {projects.map((data, i) => (
              <div key={i} className="project-item">
                <Fade bottom duration={1000} distance="40px">
                  <ProjectsCard {...data} />
                </Fade>
              </div>
            ))}
          </div>
        </Container>
      </section>
    )
  );
};

export default Projects;
