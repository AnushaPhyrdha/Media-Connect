import React from 'react';
import { render } from 'react-dom';
import '../../App.css';
import { Switch, BrowserRouter as Router ,Route } from 'react-router-dom';
import LandingPage from '../LandingPage/Landing_Page';
import Posts from '../Posts/Posts';
import Input from '../Input/Input';
import PrivateRoute from './PrivateRoute';
import history from '../../Utils/history';


class App extends React.Component{
  constructor(props){
    super(props);
  }

render() {
  return(
    <Router history = { history }>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <Route exact path="/add_post" component={Input} />
        </Switch>
      </Router>
  );
  }
}
export default App;