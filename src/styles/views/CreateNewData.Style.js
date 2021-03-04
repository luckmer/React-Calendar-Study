import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    color: #fff;

    margin: 0 10px 0 10px;
    z-index: 999;
    flex-direction: column;
    max-width: 100%;
    height: 100%;
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
`;

export const Button = styled.button`
    width: 100px;
    height: 21px;
    background-color: #21242d;
    color: #fff;
    border: 1px solid #444750;
    box-sizing: border-box;
    border-radius: 12px;
`;
