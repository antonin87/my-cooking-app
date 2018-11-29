import React, { Component } from "react";
import {themes, CookingContext} from './CookingContext';

class CookingProvider extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

  this.state = {
    theme: themes.light,
    toggleTheme: this.toggleTheme,
  };
}

  render() {
    return (
      <CookingContext.Provider value={this.state}>
        {this.props.children}
      </CookingContext.Provider>
    );
  }
}

export default CookingProvider;