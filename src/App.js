import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Wheel from './components/Wheel/';
import Recipe from './components/Recipe/Recipe';
import './App.scss';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
        <Fragment>
          <Wheel />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/recipe/:categoryId" component={Recipe}/>
          </Switch>
          </Fragment>
        </BrowserRouter>    
    );
  }
}

export default App;
