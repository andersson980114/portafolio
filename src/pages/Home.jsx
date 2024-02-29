import React from 'react';
import styled from 'styled-components'; 
import images from '../utils/images';
import RoundIconButton from '../components/RoundButton';

const Home = () => {
  return (
    <HomeSection id="Home">
      <CenteredText>ANDERSSON CORDOBA</CenteredText>
      <SubText>Frontend Developer</SubText>
      <div>
        <RoundIconButton onClick={() => window.open('https://www.linkedin.com/in/andersson-steven-cordoba-rivera-8a2478225/')}>
          <i className="bi bi-linkedin"></i>
        </RoundIconButton>
        <RoundIconButton onClick={() => window.open('https://github.com/andersson980114')}>
          <i className="bi bi-github"></i>
        </RoundIconButton>
      </div>
    </HomeSection>
  );
};

const selectedImage = images.bg1;

const HomeSection = styled.section`
  background-image: url(${selectedImage.path});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;  
`;

const CenteredText = styled.h1`
  font-size: 3em;
  font-weight: bold;
  margin: 0;  
`;

const SubText = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

export default Home;
