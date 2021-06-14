import styled from "styled-components";

export const Article = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  color: #fff;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    color: #ffff;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 25px;
    background-color: #21242d;
    border: 1px solid #444750;
    box-sizing: border-box;
    border-radius: 3px;
  }
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

export const ButtonPanel = styled.div`
  display: flex;
  align-items: center;
`;
