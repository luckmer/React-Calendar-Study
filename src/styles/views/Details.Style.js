import styled from "styled-components";

export const Article = styled.article`
    color: white;
    max-width: 900px;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

export const Style = styled.div`
    border-radius: 3px;
    box-sizing: border-box;
    display: block;
    float: left;
    font-weight: 600;
    height: 32px;
    line-height: 32px;
    margin: 0 4px 4px 0;
    min-width: 40px;
    padding: 0 12px;
    width: auto;
    background-color: ${({ color }) => (color ? color : "black")};
`;

export const Header = styled.header`
    width: 100%;
    margin-top: 20px;
    background-color: ${({ userSelection, Fake }) =>
        Fake ? Fake : userSelection};
    height: 70px;
`;

export const UserHeader = styled.div`
    margin: 12px 40px 8px 56px;
    min-height: 32px;
    z-index: 1;
`;

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
`;

export const Description = styled.div`
    min-height: 32px;
`;

export const TextPanel = styled.div`
    max-width: 700px;
    margin: auto;
    button {
        background-color: #333;
        box-shadow: none;
        border: none;
        color: #fff;
        padding: 5px 10px 5px 10px;
        border-radius: 3px;
    }
    textarea {
        min-height: 108px;
        background: #fff;
        box-shadow: none;
        background-color: #eaecf0;
        border-radius: 3px;
        resize: none;
        width: 100%;
        color: #333;
    }
`;

export const SideBar = styled.div`
    padding: 0 16px 8px 8px;
    width: 168px;
    overflow: hidden;
    z-index: 10;
    button {
        background-color: #f00049;
        box-shadow: none;
        border: none;
        color: #fff;
        padding: 5px 10px 5px 10px;
        border-radius: 3px;
    }
`;