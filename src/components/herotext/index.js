import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt'
import {Link} from 'react-router-dom'



const HeroText = () => {
    return (
        <>
        <Container>
            <h5>Hi, Im Elijah</h5>
            <h1>I Code</h1>
                    <h1>Anything.</h1>
                    <h1>Anytime.</h1>
                    <h1>Anywhere.</h1>
            <BtnContainer>
                <Link to="/projects">
                <button className="readmore">View My Work</button>
                </Link>
                <button>Contact Me</button>
                
                </BtnContainer>
            </Container>

            </>
    );
};

export default HeroText;

const Container = styled.div`
padding: 1rem;

 h5{
    color: #515151;
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 1rem;

}
 h1{
    font-size: 3.5rem;
    font-weight: 900;

&:nth-of-type(1){
    color: #af60ff;
    font-weight: 700;

}
&:nth-of-type(2){
    color: #8849c7;
    
}
&:nth-of-type(3){
    color: #651fac;
    
}
&:nth-of-type(4){
    color: #3c0473;
}

}
`;

const BtnContainer = styled.div`
margin-top: 2rem;
button{
    background-color: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: white;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.2s ease-in-out;
    margin: 0.5rem;
    font-size: 1rem;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 17px 16px -11px #81d1ff;
        transform: translateY(-5px)
    }
}

.readmore{
color: #81d1ff;
background: transparent;
border: 3px solid #81d1ff;
}
`;

const TiltWrapper = styled(Tilt)`
width: 60%;
@media(max-width: 670px){
   display: none
}
`;
