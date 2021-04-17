import React from 'react';
import Navbar from '../../components/navbar';
import Mobile from '../../components/project-hero/mobile';
import Web from '../../components/project-hero/web'
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'
import AwesomeSlider from 'react-awesome-slider';
import styled from 'styled-components';


const Projects = () => {
    return (
        <>
        <Navbar/>
        <Container>
        <AwesomeSlider animation="cubeAnimation" fillParent infinite bullets={false}>
            <div>
        <Web/>
        </div>
        <div>
        <Mobile/>
        </div>
      </AwesomeSlider>
      </Container>
         </>
    );
};

export default Projects;
const Container = styled.div`=
`;