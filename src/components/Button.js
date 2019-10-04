import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 150px;
  height: 50px;
  background: ${({ theme }) => theme.darkPurple};
  border: 5px solid ${({ theme }) => theme.text};
  border-radius: 10px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-family: 'Baloo Chettan', cursive;
  font-size: 1rem;
`;

const Button = ({ onClick, text }) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};

export default Button;
