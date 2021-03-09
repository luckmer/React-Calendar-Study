import styled from "styled-components";

export const Article = styled.div`
    z-index: 999;
    display: flex;
    color: #fff;
    flex-direction: column;
    height: 100%;
    max-width: 100%;
    margin: 0 10px 0 10px;
    @media screen and (max-width: 965px){
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`

export const Form = styled.form`
@media screen and (max-width: 965px){
    flex-direction: column;
    align-items: center;
    display: flex;
    margin-bottom: 8vh;
    }
    input {
        color: #ffff;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 24px;
        background-color: #21242d;
        border: 1px solid #444750;
        box-sizing: border-box;
        border-radius: 3px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Button = styled.button`
    width: 100px;
    height: 21px;
    cursor: pointer;
    background-color: #21242d;
    color: #fff;
    border: 1px solid #444750;
    box-sizing: border-box;
    border-radius: 12px;
`;
