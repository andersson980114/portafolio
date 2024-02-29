import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import styled from 'styled-components';
import CardButton from './CardButton';


const ProjectCard = ({ name, img, demo, git }) => {
  const hasDemo = demo && demo.trim() !== ''; 

  return (
    <StyledCard>
      <ProjectImage variant="top" src={img} />
      <BootstrapCard.Body>
        <CardTitle>{name}</CardTitle>
        <CardButtonsWrapper>
          {hasDemo && (
            <CardButton onClick={() => window.open(demo)}>
              <i className="bi bi-play-circle"></i> Demo
            </CardButton>
          )}
          <CardButton onClick={() => window.open(git)}>
            <i className="bi bi-github"></i> Git
          </CardButton>
        </CardButtonsWrapper>
      </BootstrapCard.Body>
    </StyledCard>
  );
};


const StyledCard = styled(BootstrapCard)`
  margin: 20px;
  max-width: 300px;
  background-color: rgba(0, 0, 0, 0.7);  
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);  
  }
`;

const ProjectImage = styled(BootstrapCard.Img)`
  height: 150px;
  object-fit: cover;
`;

const CardTitle = styled(BootstrapCard.Title)`
  text-align: center;
  color: white;
`;

const CardButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export default ProjectCard;
