import styled, { keyframes, css } from 'styled-components';

const animation = keyframes`
from {
    opacity: 0;
    padding-bottom: 200px;
    padding-left: 200px;
}

to {
    opacity: 1;
    padding-bottom: 0;
    padding-left: 0;
}
`;

const FlyFromTopRight = styled.div`
position: absolute;
width: inherit;
height: inherit;
animation: ${props => props.hovered ? css`${animation} ${props.duration ? props.duration+'ms' : '1000ms'} ease-in-out 1 forwards` : ''};
`;

export default FlyFromTopRight;