import React from 'react';
import styled from 'styled-components';
import {
    useHistory
} from 'react-router-dom';

const HeaderWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const HeaderInnerWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: row;
justify-content: space-between; 
height: 50px;
align-items: center;
`;

const HeaderOption = styled.div`
position: relative;
font-size: 24px;
font-weight: 300;
text-transform: uppercase;
margin: 0 25px;

&:after {
    content: ' ';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    cursor: pointer;
    transition: transform .2s ease-in-out;
    border-bottom: 1px solid black;
    transform: scaleX(${props => props.active ? 1 : 0});
}

&:hover {
    cursor: pointer;
    &:after {
        transform: scaleX(1);
    }
}
`;

const HeaderPageDescription = styled.div`
text-align: justify;
width: 800px;
font-size: 16px;
margin: 15px 0;
`;

const PageTitle = styled.div`
font-weight: 400;
font-size: 48px;
`;

const NavBar = () => {

    let history = useHistory();
    const [activePageId, setActivePageId] = React.useState(1);
    
    return (
        <>
            <HeaderInnerWrapper>
                <HeaderOption active={activePageId === 1} onClick={() => {setActivePageId(1); history.push('/animations/text')}}>TEXT</HeaderOption>
                <HeaderOption active={activePageId === 2} onClick={() => {setActivePageId(2); history.push('/animations/divs')}}>DIVS</HeaderOption>
                <HeaderOption active={activePageId === 3} onClick={() => {setActivePageId(3); history.push('/animations/3d')}}>3D</HeaderOption>
            </HeaderInnerWrapper>
            <HeaderWrapper>
                <PageTitle>
                    ANIM.ME - ANIMATIONS
                </PageTitle>
                <HeaderPageDescription>
                    Live presentation of various animations created from scratch, that showcases reusable animations for any <b>React</b> project. Currently there is no <b>TypeScript</b> implementation, but it is not ruled out just yet. The project can be found on <a href="https://github.com/blaesy/anim-me">https://github.com/blaesy/anim-me</a> and is included in the main portoflio. For any information regarding this project, please contact me on <a href="mailto:patrickwietrak@gmail.com">patrickwietrak@gmail.com</a>.
                </HeaderPageDescription>
            </HeaderWrapper>
        </>
    )
}

export default NavBar;