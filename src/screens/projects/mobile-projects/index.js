import React from 'react';
import styled from 'styled-components';
import {ArrowRightAlt} from '@material-ui/icons'
import bg4 from '../../../assets/bg4.jpg'
// import Arrow from '../arrow';


const  MobileProjectScreen = () => {
    return (
        <Container bg={bg4}>
        <Wrapper>
     <InnerWrapper>
     
                  </InnerWrapper>
                  </Wrapper>
    </Container>
    );
};

export default MobileProjectScreen;

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

`;
const Wrapper = styled.div`
height: 100vh;
width: 100vw;
background-color: rgba(255,255,255, 0.9);
@supports(-webkit-backdrop-filter: none) or (backdrop-filter: none){
    --webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255,255,255, 0.01)
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


