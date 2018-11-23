import React, { Component } from 'react';
import Wheel from './components/Wheel';
import Toolbar from './components/Toolbar';
import CookingProvider from './context/CookingProvider';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <CookingProvider  value={this.state}>
        <Wheel>
        
          

        </Wheel>
        </CookingProvider>
      </div>
      
    );
  }
}

export default App;
