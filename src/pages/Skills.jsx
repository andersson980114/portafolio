import React from 'react';
import styled from 'styled-components';
import mySkill from '../utils/skill';

const Skill = () => {
  return (
    <SkillSection id="skills">
      <SkillTitle>SKILLS</SkillTitle>
      <SkillGrid>
        {mySkill.map((skill, index) => (
          <SkillImage key={index} src={skill.path} alt={skill.alt} />
        ))}
      </SkillGrid>
    </SkillSection>
  );
};

const SkillSection = styled.section`
  background-color: #0c0c22;
  color: white;
  text-align: center;
  padding: 60px 20px; 
`;

const SkillTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 30px;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  max-width: 1200px;  
  margin: 0 auto;  

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); 
  }
`;

const SkillImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 600px; 
`;

export default Skill;
