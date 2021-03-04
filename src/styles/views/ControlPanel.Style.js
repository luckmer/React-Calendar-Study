import styled from "styled-components";

export const Article = styled.article`
    display: flex;
    justify-content: space-around;
    align-items: center;
    section {
        &&:nth-child(1) {
        }
        &&:nth-child(0) {
            width: 100%;
        }
    }
`;
