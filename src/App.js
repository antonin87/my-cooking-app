import React, {Fragment} from 'react';
import {BrowserRouter} from 'react-router-dom';
import CookingProvider from './context/CookingProvider';
import MyCookingApp from './MyCookingApp';
import './App.scss';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Fragment>
            <CookingProvider value={this.state}>
              <MyCookingApp />
            </CookingProvider>
          </Fragment>
        </BrowserRouter>    
    );
  }
}

export default App;
