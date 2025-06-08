import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";
import { max } from "moment";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets }: ExperienceType) => {
  return (
    // <Col lg="6">
      <Card 
        style={{ 
          flex: 1,
          backgroundColor: 'rgb(29, 31, 33)',
          border: '1px solid rgb(43, 188, 138)'
        }} 
        className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100"
      >
        <CardBody className="">
          <img
            src={companyLogo}
            style={{
              objectFit: "cover",
              left: 0,
              right: 0,
              top: "7rem",
              marginLeft: "auto",
              marginRight: "auto",
              minWidth: "8rem",
              maxHeight: "8rem",
              //borderRadius: "15%",
            }}
            className="shadow mb-3"
            alt={companyLogo}
          />
          <CardTitle tag="h4" className="mb-2" style={{ color: 'rgb(43, 188, 138)' }}>
            {company}
          </CardTitle>
          <CardSubtitle tag="h5" className="mb-2" style={{ color: 'rgb(43, 188, 138)' }}>
            {role}
          </CardSubtitle>
          <CardSubtitle style={{ color: 'rgb(43, 188, 138)' }}>{date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-center" style={{ color: 'rgb(43, 188, 138)' }}>
            {desc}
            <ul style={{ color: 'rgb(43, 188, 138)' }}>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    // </Col>
  );
};

export default ExperienceCard;
