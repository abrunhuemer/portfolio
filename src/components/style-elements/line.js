import styled, { keyframes } from "styled-components";

export const drawLine = keyframes`
    from {
        width: 0px;
        opacity: 0;
    } 
    to{
        width: 300px;
        opacity: 1;
    }
`;


export const Line = styled.div`
    height: 2px;
    background-color: gray;
    width: 0px;
    animation: ${drawLine} 1s forwards;
`;