import React from 'react';
import styled from 'styled-components';
import {ArrowRightAlt} from '@material-ui/icons'
import {Link} from 'react-router-dom'
// import Arrow from '../../arrow';


const WebHeroText = () => {
    return (
        <>
        <Container>
            <h1>Web.</h1>
            <h5>I develop applications that live on the internet </h5>
            </Container>
            <BtnContainer>
            <Link to="webprojects">
                <button>View My Work <ArrowRightAlt/></button>
                </Link>
                </BtnContainer>
                {/* <Arrow/> */}
            </>
    );
};

export default WebHeroText;

const Container = styled.div`
padding: 1rem;

h5{
    color: #747f87;
    font-weight: 200;
    font-size: 1.8rem;
    margin-bottom: 0rem;

}

h1{
    font-family: 'Sora', sans-serif;
    font-size: 3.5rem;
    font-weight: 900;

&:nth-of-type(1){
    color: #071c33;
    font-weight: 700;

}

}
`;
const BtnContainer = styled.div`
margin-top: 0rem;
button{
    background-color: #8849c7;
    border: none;
    padding: 0.8rem 1rem;
    color: white;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #8849c7;
    transition: all 0.2s ease-in-out;
    margin: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 17px 16px -11px #8849c7;
        transform: translateY(-5px)
    }
}

.readmore{
color: #81d1ff;
background: transparent;
border: 3px solid #81d1ff;
}
`;



