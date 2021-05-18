import styled from "styled-components";

export const Cards = styled.div`
  padding-top: 60px;
  display: flex;
  flex-flow: row wrap;

  @media screen and (min-width: 1950px) {
    max-width: 2400px;
    margin: auto;
    justify-content: flex-start;
  }
  @media screen and (max-width: 1950px) {
    max-width: 1800px;
    margin: auto;
    align-items: center;
    justify-content: flex-start;
  }
`;

const LessCode = styled.div`
  width: 13vw;
  height: 17vh;
  border: 1px solid #444750;
  box-sizing: border-box;
  &:hover {
    transition: 0.3s;
    background-color: #1e2028;
    color: #fff;
  }
  transition: 0.3s;
`;

export const Planner = styled(LessCode)``;

export const EmptyPlanner = styled(LessCode)`
  background-color: #1e2028;
`;

export const Days = styled.div``;

export const CardPlanner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  div {
  }
`;

export const CustomDayNumber = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  p {
    padding: ${({ check }) => (check ? "10px" : "10px")};
    background: ${({ check }) => (check ? "#F00049" : "")};
    border-radius: ${({ check }) => (check ? "5px" : "5px")};
    margin-bottom: ${({ check }) => (check ? "5px" : "5px")};
    padding-bottom: 10px;
    display: flex;
    color: ${({ check }) => (check ? "#efeff0" : "#8A9097")};
    padding-top: 10px;
    align-items: center;
  }
`;

export const UpdateColor = styled.div`
  padding: 15px;
  margin-bottom: 5px;
  padi-bottom: 100px;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  background: ${({ ColorType }) => (ColorType ? ColorType : "#F00049")};
`;

export const UpdateP = styled.p`
  color: white;
  padding: 3px;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    color: white;
    border-radius: 5px;
    background-color: #21242d;
    transition: 0.3s;
    color: #fff;
  }
  transition: 0.3s;
`;

export const CurrentData = styled.div`
  overflow-y: scroll;
  padding-top: 20px;
  opacity: ${({ check }) => (check ? "0" : "1")};
  ::-webkit-scrollbar {
    width: 0px;
  }

  a {
    display: flex;
    justify-content: space-between;
    margin: 0 4px 0 4px;
    color: #fff;
    text-decoration: none;
  }

  max-height: 100px;
  width: 100%;
  border-radius: 4px;
`;

export const Collision = styled.div`
  z-index: 999;
`;
