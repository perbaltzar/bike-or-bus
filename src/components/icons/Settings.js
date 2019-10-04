import React from 'react';
import styled from 'styled-components';

const SettingsStyled = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 100;
`;
const Settings = ({ settings, onClick }) => {
  return (
    <SettingsStyled onClick={onClick}>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px">
        <path
          fill={settings ? '#fff3db' : '#42152e'}
          d="M27.5 18l-.5-.3c-.6-.3-1-1-1-1.7s.4-1.4 1-1.7l.5-.3a3 3 0 001.1-4.1l-1-1.8a3 3 0 00-4-1l-.6.2a2 2 0 01-2 0 2 2 0 01-1-1.7V5a3 3 0 00-3-3h-2a3 3 0 00-3 3v.6a2 2 0 01-1 1.7 2 2 0 01-2 0L8.5 7a3 3 0 00-4.1 1.1l-1 1.8a3 3 0 001 4l.6.4c.6.3 1 1 1 1.7s-.4 1.4-1 1.7l-.5.3a3 3 0 00-1.1 4.1l1 1.8a3 3 0 004 1l.6-.2a2 2 0 012 0c.6.3 1 1 1 1.7v.6a3 3 0 003 3h2a3 3 0 003-3v-.6a2 2 0 011-1.7 2 2 0 012 0l.5.3a3 3 0 004.1-1.1l1-1.8a3 3 0 00-1-4zM16 21a5 5 0 110-10 5 5 0 010 10z"
        />
      </svg>
    </SettingsStyled>
  );
};

export default Settings;
