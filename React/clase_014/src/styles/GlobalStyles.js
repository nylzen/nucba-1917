import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        background-color: #000000;
        -webkit-tap-highlight-color: transparent; 
        font-family: 'Inter', sans-serif;
        color: #fff;
        
    }

    a{
        text-decoration: none;
        transition: all .3s ease;
        color: #fff;

        :visited{
            color: #fff;
        }
        :hover{
            color: #4747cb;
            transition: all .3s ease;
        }
    }
`;
