import React from 'react';
import styled from 'styled-components'
import image from '../../assets/hero.png'
import bg from '../../assets/bg.jpg'
import './index.css'
import Tilt from 'react-tilt'
import HeroText from '../herotext';
import Arrow from '../arrow';

const Hero = () => {
    return (
       <Container bg={bg}>
           <Wrapper>
                <InnerWrapper>
                    <Left>
                       <HeroText/>
                    </Left>
                    <TiltWrapper options={{max: 25}}>
                    <img className="hero" src={image} alt=""/>
                    </TiltWrapper>
                </InnerWrapper>
           </Wrapper>

       </Container>
    );
};

export default Hero;

const TiltWrapper = styled(Tilt)`
width: 60%;
@media(max-width: 670px){
 position: absolute;
  z-index: -2 ;
  transform: rotate(-0.06turn)  translate(-20%,70%);
}
`;



const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${({ bg }) => bg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
overflow: hidden;
`;
const Wrapper = styled.div`
height: 100vh;
width: 100vw;
background-color: rgba(255,255,255, 0.9);
@supports(-webkit-backdrop-filter: none) or (backdrop-filter: none){
    --webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255,255,255, 0.5)
} 
`;
const InnerWrapper = styled.div`
max-width: 1000px;
height: 100%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

@media(max-width: 670px){
    overflow: hidden;
   }

`;

const Left = styled.div`
width: 40%;
@media(max-width: 670px){
    width: 100%;
}
`;