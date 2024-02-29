import React from 'react';
import styled from 'styled-components';


const CardButton = ({ children, onClick }) => {
  return <OvalButton onClick={onClick}>{children}</OvalButton>;
};

const OvalButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 25px;  
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default CardButton;
