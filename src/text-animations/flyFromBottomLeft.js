import styled, { keyframes, css } from 'styled-components';

const animation = keyframes`
from {
    opacity: 0;
    padding-top: 200px;
    padding-right: 200px;
}

to {
    opacity: 1;
    padding-top: 0;
    padding-right: 0;
}
`;

const FlyFromBottomLeft = styled.div`
position: absolute;
width: inherit;
height: inherit;
animation: ${props => props.hovered ? css`${animation} ${props.duration ? props.duration+'ms' : '1000ms'} ease-in-out 1 forwards` : ''};
`;

export default FlyFromBottomLeft;