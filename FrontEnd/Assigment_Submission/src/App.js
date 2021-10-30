import React, {component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostView from './Components/PostView/Post_View';
import LandingPage from './Components/LandingPage/Landing_Page';
import './App.css';

class App extends React.Component{
  

 render(){
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component = {LandingPage} />
          <Route exact path='/postview' component = {PostView} />
        </Switch>
        </div>
    </Router>
  );
}
}


export default App;
