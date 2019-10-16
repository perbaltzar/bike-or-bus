import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 7px 30px;
  background: ${({ theme }) => theme.darkPurple};
  border: 4px solid ${({ theme }) => theme.text};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-family: 'Baloo Chettan', cursive;
  font-size: 14px;
`;

const Button = ({ onClick, text }) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};

export default Button;
