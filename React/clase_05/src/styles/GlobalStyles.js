import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: #131415;
    }

    :root{
       --primary: #4747ff;
    }
`;

export default GlobalStyles;
