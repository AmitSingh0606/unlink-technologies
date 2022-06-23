import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from '../src/Navbar';
import Home from './Components/Home';
import Blogs from './Blogs';
import { Switch , Route } from 'react-router-dom';
import Footer from './Components/Footer';
import ItService from './Components/ItService';
import SoftwareService from './Components/SoftwareService';
import WebDevlopment from './Components/WebDevlopment';
import UXDesignService from './Components/UXDesignService';
import MobileApp from './Components/MobileApp';
import Cloud from './Components/Cloud';
function App() {
  return (
    
    <>
    <Navbar/>
    <Switch>
      <Route exact path = "/" component={Home} />
      <Route exact path = "/blog" component={Blogs} />
      <Route exact path = "/cloudservice" component={Cloud} />
      <Route exact path = "/IT&Consult" component={ItService} />
      <Route exact path = "/softwareEngg" component={SoftwareService} />
      <Route exact path = "/WebDevlopment" component={WebDevlopment} />
      <Route exact path = "/ux&ui" component={UXDesignService} />
      <Route exact path = "/moblile&application" component={MobileApp} />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
