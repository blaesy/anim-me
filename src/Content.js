import styled from 'styled-components';
import { AnimationCard } from './AnimationCard';
import { FadeIn, FadeOut, FlyFromLeft } from './animations/flyFromLeft';
import { TextAnims } from './textAnims';

const AnimationsWrapper = styled.div`
margin: 100px 15%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
border-radius: 20px;
box-sizing: border-box;
padding: 20px;
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
        <AnimationsWrapper>
            {TextAnims.map((item, i) =>
                <AnimWrapFlex>
                    <AnimationCard Anim={item.component} title={item.title} duration={item.duration} />
                    <AnimNumbering>#{i + 1}</AnimNumbering>
                </AnimWrapFlex>)}
        </AnimationsWrapper>
    )
}

export default Content;