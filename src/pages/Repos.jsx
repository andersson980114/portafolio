import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/Card';
import proyectos from '../utils/proyectos';

const Repos = () => {
  return (
    <ReposSection id="portfolio">
      <ReposTitle>PROJECTS</ReposTitle>
      <GridContainer>
        {proyectos.map((proyecto, index) => (
          <ProjectCard key={index} {...proyecto} />
        ))}
      </GridContainer>
    </ReposSection>
  );
};

const ReposSection = styled.section`
  background-color: #1a1a33;
  color: white;
  text-align: center;
  min-height: 100vh;
  justify-content: center;  
  align-items: center; 
  padding: 60px 20px;  
`;

const ReposTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 30px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  max-width: 1200px; 
  margin: 0 auto; 
`;

export default Repos;
