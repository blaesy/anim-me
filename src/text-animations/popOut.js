import styled, { keyframes, css } from 'styled-components';

const animation = keyframes`
0% {
    opacity: 1;
    transform: scale(1);
}

20% {
    opacity: 1;
    transform: scale(1.1);

}
100% {
    opacity: 0;
    transform: scale(0);
}
`;

const PopOut = styled.div`
position: absolute;
width: inherit;
height: inherit;
animation: ${props => props.hovered ? css`${animation} ${props.duration ? props.duration+'ms' : '1000ms'} ease-in-out 1 forwards` : ''};
`;

export default PopOut;