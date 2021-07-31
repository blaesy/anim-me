import styled, { keyframes, css } from 'styled-components';

const animation = keyframes`
0% {
    opacity: 0;
    transform: rotateY(0deg);
    font-size: 0;
}

80% {
    opacity: 1;
}

100% {
    opacity: 1;
    transform: rotateY(360deg);
    font-size: inherit;
}
`;

const RotateFadeIn = styled.div`
position: absolute;
width: inherit;
height: inherit;
transform-style: preserve-3d;
animation: ${props => props.hovered ? css`${animation} ${props.duration ? props.duration+'ms' : '1000ms'} ease-in-out 1 forwards` : ''};
`;

export default RotateFadeIn;