import React from 'react';
import styled from 'styled-components';


const RoundIconButton = ({ children, onClick }) => {
  return <RoundButton onClick={onClick}>{children}</RoundButton>;
};

const RoundButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`
;

export default RoundIconButton;
