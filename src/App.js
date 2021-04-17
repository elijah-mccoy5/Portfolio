import Home from './screens/home'
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Projects from './screens/projects';
import {Carousel} from 'react-bootstrap'
import WebProjects from './screens/projects/web-projects';
function App() {
  return (
    <>
    <Switch>  
      <Route exact path="/" component={Home}/>
      <Route exact path="/projects" component={Projects}/>  
      <Route exact path="/webprojects" component={WebProjects}/>  
    </Switch>
    {/* <Carousel controls={true}>
  <Carousel.Item>
    <Home/>
  </Carousel.Item>
  <Carousel.Item>
    <Projects/>
  </Carousel.Item>
  </Carousel> */}
    </>
  );
}

export default App;
