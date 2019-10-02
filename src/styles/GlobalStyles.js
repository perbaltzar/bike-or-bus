import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Baloo+Chettan&display=swap');

*,*::before,*::after{
    padding: 0;
    margin:0;
    box-sizing: border-box;
    position: relative;
    outline: none;
    font-family: 'Baloo Chettan', cursive;
}
`;

export default GlobalStyles;