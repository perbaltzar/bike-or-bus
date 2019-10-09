import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  font-family: 'Open Sans';
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  width: 100%;
  margin-bottom: 10px;
`;

const Input = ({ value, onChange }) => {
  return <StyledInput value={value} onChange={onChange}></StyledInput>;
};

export default Input;
