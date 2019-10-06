import React from 'react';
import styled from 'styled-components';

import Button from './Button';
const StyledSettings = styled.div`
  height: 90vh;
  width: calc(100vw - 20px);
  position: absolute;
  margin: 10px;
  background-image: ${({ theme }) => theme.background};
  z-index: 110;
  border-radius: 15px;
  border: 7px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  flex-direction: column;
  div {
    width: 100%;
    padding: 5px;
  }

  h4 {
    letter-spacing: 2px;
    font-size: 30px;
    text-shadow: 2px 3px 1px ${({ theme }) => theme.darkPurple};
  }
  form {
    display: flex;
    justify-content: space-between;
  }
`;

const Settings = ({ settings }) => {
  return (
    <StyledSettings>
      <h4>Settings</h4>
      <div>
        <p>Where do you want to go?</p>
        <form>
          <input type="text" />
          <Button text="Set" />
        </form>
      </div>
    </StyledSettings>
  );
};

export default Settings;
