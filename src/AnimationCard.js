import React from 'react';
import styled from 'styled-components';

const AnimWrap = styled.div`
position: relative;
font-size: 24px;
height: 250px;
width: 300px;
display: flex;
margin: 16px;
box-sizing: border-box;
flex-direction: column;
align-items: center;
justify-content: center;
background: white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 12px;
overflow: hidden;

& > * {
pointer-events: none;
}

`;

const FullWidthHeight = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const AnimDesc = styled.div`
position: absolute;
text-align: center;
font-size: 14px;
font-weight: 300;
bottom: 12px;
`;

export const AnimationCard = ({Anim, duration, title}) => {

    const [hovered, setHovered] = React.useState(false);

    return (
        <AnimWrap onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Anim hovered={hovered} duration={duration}>
                <FullWidthHeight>
                    {title}
                </FullWidthHeight>
            </Anim>
            <AnimDesc>
                hover over me
            </AnimDesc>
        </AnimWrap>
    )
}