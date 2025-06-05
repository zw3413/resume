import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";
import ExperienceCard from "../components/ExperienceCard";
import Fade from "react-reveal/Fade";

const Experience = () => {
  return (
    experience && (

        <section className="section section-lg">
          <Container style={{ maxWidth : '900px'}}>
            <div className="d-flex p-4 justify-content-center">
              {/* <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-briefcase-24 text-info" />
                </div>
              </div> */}
              <div className="pl-4">
                <h4 className="display-3 text-info">Education and Work Experience</h4>
              </div>
            </div>
            <Row className="align-items-start flex-column">
              {experience.map((data, i) => {
                return <ExperienceCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>

    )
  );
};

export default Experience;
