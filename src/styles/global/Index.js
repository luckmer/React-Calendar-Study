import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing:border-box;


::-webkit-scrollbar {
    width: 0px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
::-webkit-scrollbar-thumb {
    background: #888; 
}

::-webkit-scrollbar-thumb:hover {
    background: #555; 
}

}
html,body{
    background-color:#21242D;
}
`;

export default GlobalStyle;
