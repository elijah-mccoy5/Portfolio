import React from 'react';
import styled from 'styled-components'
import bg3 from '../../../assets/bg3.jpg'
import Navbar from '../../../components/navbar';
import Socials from '../../../components/socials';
import WebProjectHero from './web-project-hero';

const WebProjects = () => {
    return (
        <>
        <Navbar/>
        <Container bg={bg3}>
        <Wrapper>
     <InnerWrapper>
         <WebProjectHero/>
                  </InnerWrapper>
                  </Wrapper>
    </Container>
    </>
    );
};

export default WebProjects;
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
position: relative;

@media(max-width: 670px){
    height: 100%;
   }
`;
const Wrapper = styled.div`
height: 100%;
width: 100vw;
background-color: rgba(255,255,255, 0.9);
@supports(-webkit-backdrop-filter: none) or (backdrop-filter: none){
    --webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255,255,255, 0.8)
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
width: 100%;
@media(max-width: 670px){
    width: 850%;
}
`;
