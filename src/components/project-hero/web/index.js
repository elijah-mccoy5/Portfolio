import React from 'react';
import styled from 'styled-components'
import bg3 from '../../../assets/bg3.jpg'
import Tilt from 'react-tilt'
import iphone from '../../../assets/iphone.png'
import computer from '../../../assets/computer.png'
import data from '../../../assets/data.png'
import WebHeroText from '../web-hero-text';
import "./index.css"
import Mobile from '../mobile';

const Web = () => {
    return (
        <Container bg={bg3}>
        <Wrapper>
     <InnerWrapper>
     <Left>
                    <WebHeroText/>
                 </Left>
           <TiltWrapper options={{max: 5}}>
     <img className="computer" src={computer} alt=""/>
           </TiltWrapper>
                  </InnerWrapper>
                  </Wrapper>
    </Container>
    
    );
};

export default Web;
const TiltWrapper = styled(Tilt)`
width: 60%;   
 @media(max-width: 670px){
 position: absolute;
  z-index: -2;
  transform: rotate(0.01turn) translate(-40% ,-30%);
}
`;


const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${({ bg }) => bg});
overflow: hidden;
background-repeat: no-repeat;
background-size: cover; 
background-position: center;
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
height: 1%;
width: 40%;
@media(max-width: 670px){
    width: 850%;
}
`;