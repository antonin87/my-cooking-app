import React from 'react';
import Recipe from './components/pages/Recipe/Recipe';
import {Route, Switch} from 'react-router-dom';

const Routing = () => {
  return (
    <Switch>
         <Route path="/category/:urlName" component={Recipe}/>
    </Switch>
    )
}

export default Routing;




