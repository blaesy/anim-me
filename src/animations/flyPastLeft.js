import styled, { keyframes, css } from 'styled-components';

const animation = keyframes`
0% {
    opacity: 0;
    padding-right: 200px;
}

50% {
    opacity: 1;
    padding-right: -25px;
    padding-left: -25px;
    transform: scale(1.1);
}

100% {
    opacity: 0;
    padding-left: 200px;
}
`;

export const FlyPastLeft = styled.div`
position: absolute;
width: inherit;
height: inherit;
animation: ${props => props.hovered ? css`${animation} ${props.duration ? props.duration+'ms' : '1000ms'} ease-in-out 1 forwards` : ''};
`;