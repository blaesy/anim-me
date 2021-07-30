import styled from 'styled-components';
import { AnimationCard } from './AnimationCard';
import { FadeIn, FadeOut, FlyFromLeft } from './animations/flyFromLeft';
import { TextAnims } from './textAnims';

const ContentWrapper = styled.div`
position: relative;
width: 100%;
margin: 0 auto;
font-size: 56px;
font-weight: 500;

& a {
    text-decoration: none;
    font-weight: bold;
    color: inherit;
}
`;

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
    transform: scaleX(0);
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

const AnimationsWrapper = styled.div`
margin: 100px 100px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;

const AnimWrapFlex = styled.div`
flex: 1 0 25%; 
display: flex;
align-items: center;
flex-direction: column;
margin-bottom: 25px;
`;

const AnimNumbering = styled.span`
font-size: 14px;
margin: 0 auto;
`;



const Content = () => {
    return (
        <ContentWrapper>
            <HeaderInnerWrapper>
                <HeaderOption>TEXT</HeaderOption>
                <HeaderOption>DIVS</HeaderOption>
                <HeaderOption>3D</HeaderOption>
            </HeaderInnerWrapper>
            <HeaderWrapper>
                <PageTitle>
                    ANIM.ME - ANIMATIONS
                </PageTitle>
                <HeaderPageDescription>
                    Live presentation of various animations created from scratch, that showcases reusable animations for any <b>React</b> project. Currently there is no <b>TypeScript</b> implementation, but it is not ruled out just yet. The project can be found on <a href="https://github.com/blaesy/anim-me">https://github.com/blaesy/anim-me</a> and is included in the main portoflio. For any information regarding this project, please contact me on <a href="mailto:patrickwietrak@gmail.com">patrickwietrak@gmail.com</a>.
                </HeaderPageDescription>
            </HeaderWrapper>
            <AnimationsWrapper>
                    
                        {TextAnims.map((item, i) => 
                        <AnimWrapFlex>
                            <AnimationCard Anim={item.component} title={item.title} duration={item.duration}/>
                            <AnimNumbering>#{i+1}</AnimNumbering>
                        </AnimWrapFlex> 
                        )}
                     
            </AnimationsWrapper>
        </ContentWrapper>
    )
}

export default Content;