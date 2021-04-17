import React from 'react';
import styled from 'styled-components';
import project1 from '../../../../assets/project1.png'
import project2 from '../../../../assets/project2.png'
import project3 from '../../../../assets/project3.png'
import project4 from '../../../../assets/project4.png'
import project5 from '../../../../assets/project5.png'
import './index.css'

const WebProjectHero = () => {
    return (
        <>

<div className="web-project-container">
<div className="text-center">
    <div className="container">
        <div class="row pt-4">
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">        
    <div className="card">
    <a href="https://cuue-fbcf7.web.app">
   <img src={project1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">CUUE</h5>
    <p className="card-text">Create parties, vote for music, queue songs with Spotify API.</p>
    <p className="card-text"><small className="text-muted">React |  Material UI  |  Express  |  Firebase</small></p>
  </div>
  </a>
</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                <div className="card">
                  <a href="https://tinder-clone-599d7.web.app">
   <img src={project2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Speed Cube Tinder</h5>
    <p className="card-text">A clone of popular dating app Tinder, featuring speed cubes.</p>
    <p className="card-text"><small className="text-muted">React |  Bootstrap | Firebase</small></p>
  </div>
  </a>
</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                <div className="card">
                  <a href="https://www.amandagoflow.com">
   <img src={project3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Amandagoflow</h5>
    <p className="card-text">Very basic website I've made for a client. Yoga and Fitness Instructor</p>
    <p className="card-text"><small className="text-muted">React |  Bootstrap | Firebase</small></p>
  </div>
  </a>
</div>
                </div>
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                               
    <div className="card">
      <a href="https://object-detect-1364f.web.app">
   <img src={'https://bitmovin.com/wp-content/uploads/2019/08/Object_detection_Blog_Image_Q3_19.jpg'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Object Detection</h5>
    <p className="card-text">Application I made to detect items and living things.</p>
    <p className="card-text"><small className="text-muted">Tensorflow | Python</small></p>
  </div>  
  </a>
  </div>
      
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                <div className="card">
                <a href="https://auth-development-3bc9a.web.app" >
   <img src={project4} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">User Authentication.</h5>
    <p className="card-text">Simple website for a client. Event Planning</p>
    <p className="card-text"><small className="text-muted">React |  Bootstrap </small></p>
  </div>
  </a>
</div>

                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                <div className="card">
                  <a href="/webprojects">
   <img src={project5} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">SM & Co.</h5>
    <p className="card-text">Simple website for a client. Event Planning</p>
    <p className="card-text"><small className="text-muted">React |  Material UI </small></p>
  </div>
  </a>
</div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
            </>
    );
};

export default WebProjectHero;

