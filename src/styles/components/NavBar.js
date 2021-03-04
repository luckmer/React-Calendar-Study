import styled from "styled-components";

export const Article = styled.article`
    width: 100%;
`;
export const HeaderBox = styled.div``;
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #efeff0;
    padding: 10px 0 10px 0;
    font-weight: bold;
    font-size: 20px;
    a {
        text-decoration: none;
        color: #fff;
    }
    p {
        display: flex;
        justify-content: center;
        width: 200px;
        cursor: pointer;
    }
    button {
        cursor: pointer;
        margin-left: 10px;
        margin-right: 10px;
        border: 0;
        color: #fff;
        font-weight: light;
        font-size: 19px;
        background-color: #21242d;
        padding: 3px;
    }
    border-bottom: 1px solid #444750;
`;
