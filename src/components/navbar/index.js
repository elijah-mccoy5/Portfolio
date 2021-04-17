import React, {useState}from 'react';
import './index.css'
import styled from "styled-components"
import Logo from '../logo'
 import {Link} from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
            <Nav>
                <Container>

                    <Logo />
                    <Hamburger onClick ={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Hamburger>
                    <Menu isOpen={isOpen}>
                        <LinkWrapper>
                        <Link to="/projects">
                        <MenuLink >Projects</MenuLink>
                        </Link>
                        <MenuLink>Resume</MenuLink>
                        <Button>Get In Touch</Button>
                        </LinkWrapper>
                    </Menu>
                </Container>
            </Nav>
    );
};

export default Navbar;

const Container = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
flex-wrap: wrap;
max-width: 1000px;
margin: auto;
padding: 2rem;

`;
const Nav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
position: absolute;

    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
`;
const Menu = styled.div`  display: flex;
justify-content: space-between;
align-items: center;
position: relative;
@media (max-width: 768px) {
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(15px);
    background-color: rgba(255, 255, 255, 0.4);
  }
  border-radius: 1rem;
  margin-top: 1rem;
  box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  flex-direction: column;
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  transition: max-height 0.3s ease-in;
  width: 100%;
}
`;
const LinkWrapper = styled.div`
a{
    text-decoration: none;
}
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
padding: 1.5rem 0;
@media (max-width: 768px) {
  flex-direction: column;
}

`;
const MenuLink = styled.a`
text-decoration: none;
color: #858586;
font-size: 0.9rem;
font-weight: 500;
padding: 0.7rem 1.5rem;
transition: all 0.2s ease-in;
border-radius: 0.5rem;
cursor: pointer;

&:hover {
    color: #7781d4;
}
`;
const Button = styled.button`
font-size: 0.8rem;
 background: #f774c5;
 border: none;
 padding: 0.8rem 1.1rem;
 color: white;
 border-radius: 1rem;
 box-shadow: 0px 13px 24px -7px #ecb6d7;
 transition: all 0.2s ease-in;
 margin-left: 0.5rem;
cursor: pointer;

&:hover{
    box-shadow: 0px 17px 16px -11px #ecb6d7;
    transform: translateY(-5px)
}

@media (max-width: 670px){
}
`;
const Hamburger = styled.div`
display: none;
flex-direction: column;
cursor: pointer;

span{
    height: 3px;
    width: 25px;
    background: #f774c5;
    margin-bottom: 4px;
    border-radius: 5px;
}
@media (max-width: 768px){
    display: flex;
}
`;

