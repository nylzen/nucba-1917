import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 1rem 2rem;
        background: crimson;
    }

    :root{
        --color-primary: #4747ff;
        --color-secondary: yellow;
    }
`;

export default GlobalStyle;
