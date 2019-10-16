import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Baloo+Chettan&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

*,*::before,*::after{
    padding: 0;
    margin:0;
    box-sizing: border-box;
    position: relative;
    outline: none;
    font-family: 'Baloo Chettan', cursive;
}
p{
    font-size: 14px;
}
`;

export default GlobalStyles;
