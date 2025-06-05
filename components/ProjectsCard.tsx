import React, { useState } from "react";
import { Card, CardBody, Button, Modal, ModalBody } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, media, video, tech }: ProjectType) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Card 
        className="shadow-lg--hover shadow mt-4 project-card" 
        onClick={toggle}
        style={{ cursor: 'pointer' }}
      >
        <CardBody className="p-4 d-flex flex-column">
          {/* Media Section */}
          <div className="media-container mb-4">
            {media && (
              <div style={{ 
                overflow: 'hidden', 
                borderRadius: '8px',
                backgroundColor: '#f8f9fa'
              }}>
                <img 
                  src={media} 
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain'
                  }} 
                  alt={name}
                />
              </div>
            )}
            
            {video && (
              <div style={{ 
                borderRadius: '8px', 
                overflow: 'hidden',
                backgroundColor: '#f8f9fa'
              }}>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src={video}
                    allowFullScreen
                    style={{ borderRadius: '8px' }}
                  ></iframe>
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="content-section">
            {/* Title and Tags */}
            <div className="mb-3">
              <h3 className="mb-2" style={{ 
                color: '#1d8cf8',
                fontWeight: '600',
                fontSize: '1.5rem'
              }}>{name}</h3>
              <div className="d-flex flex-wrap gap-2">
                {tech && tech.map((techItem, index) => (
                  <span 
                    key={index} 
                    className="tag" 
                    style={{
                      backgroundColor: '#1d8cf8',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="description mb-4" style={{ 
              color: '#525f7f',
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>{desc}</p>

            {/* Buttons */}
            <div className="d-flex gap-2">
              {github && (
                <Button
                  className="btn-icon"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="Github"
                  style={{
                    borderRadius: '8px',
                    padding: '8px 16px'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              )}
              {link && (
                <Button
                  className="btn-icon"
                  color="info"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Demo"
                  style={{
                    backgroundColor: '#1d8cf8',
                    borderRadius: '8px',
                    padding: '8px 16px'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">Demo</span>
                </Button>
              )}
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Modal */}
      <Modal isOpen={modal} toggle={toggle} size="xl" centered>
        <ModalBody className="p-0">
          <div className="modal-content">
            {/* Media Section */}
            <div className="modal-media">
              {media && (
                <img 
                  src={media} 
                  alt={name}
                />
              )}
              
              {video && (
                <iframe
                  src={video}
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Content Section */}
            <div className="modal-body">
              <h3 className="mb-3" style={{ 
                color: '#1d8cf8',
                fontWeight: '600',
                fontSize: '1.75rem'
              }}>{name}</h3>
              
              <div className="d-flex flex-wrap gap-2 mb-3">
                {tech && tech.map((techItem, index) => (
                  <span 
                    key={index} 
                    className="tag" 
                    style={{
                      backgroundColor: '#1d8cf8',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              <p className="description mb-4" style={{ 
                color: '#525f7f',
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>{desc}</p>

              <div className="d-flex gap-2">
                {github && (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={github}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                    style={{
                      borderRadius: '8px',
                      padding: '8px 16px'
                    }}
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                )}
                {link && (
                  <Button
                    className="btn-icon"
                    color="info"
                    href={link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Demo"
                    style={{
                      backgroundColor: '#1d8cf8',
                      borderRadius: '8px',
                      padding: '8px 16px'
                    }}
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demo</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProjectsCard;
