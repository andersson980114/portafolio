import React from 'react';
import styled from 'styled-components';
import images from '../utils/images';
import { Card } from 'react-bootstrap';

const AboutMe = () => {
  const image = images.me;
  return (
    <AboutMeSection id="about">
      <Title>ABOUT ME</Title>
      <ContentWrapper>
        <ImageContainer>
          <img src={image.path} alt={image.alt} />
        </ImageContainer>
        <TextCard>
        <p>
            I am a Systems Engineer passionate about Frontend development,
            with a solid experience in creating user experiences.
            My focus is on using the latest technologies to drive
            innovative projects. <br/>
            In the frontend field, I have worked with
            React, Next, Vue, and applied both Javascript and Typescript to
            build dynamic and functional interfaces.
            <br/>
            I have also worked with express, Java, MongoDB, PostgreSQL, MySQL, and AWS.
        </p>

        </TextCard>
      </ContentWrapper>
    </AboutMeSection>
  );
};


const AboutMeSection = styled.section`
  background-color: #0c0c22;
  color: white;
  padding: 60px 20px;  
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;

  @media (max-width: 767px) {
    padding: 20px; 
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  order: 2;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    order: 1;
    margin-right: 20px;
  }

  img {
    width: 100%;  
    max-width: 100%;  
    border-radius: 10px;
  }
`;

const TextCard = styled(Card)`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  text-align: left;
  padding: 20px;
  width: 100%;  

  p {
    font-size: 1em;  

    @media (min-width: 768px) {
      font-size: 1.3em;  
    }
  }

  @media (min-width: 768px) {
    flex-grow: 1;
    max-width: 500px;   
  }
`;


export default AboutMe;
