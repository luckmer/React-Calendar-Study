import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing:border-box;
}
html,body{
    background-color:#21242D;
    min-width:100%;
    min-height: 100vh;
}
`;

export default GlobalStyle;
