import React, { Component } from "react";
import {CookingContext} from './CookingContext';
import CategoryModel from './../models/CategoryModel';

class CookingProvider extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = (color) => {
      this.setState({theme: color});
    };
    this.state = {
      theme: null,
      toggleTheme: this.toggleTheme,
    };
  }

  componentDidMount() {
    this.categoryModel = new CategoryModel();
    this.categoryModel.fetchCategories()
        .then((response) => {
          this.setState({
            categories: response.data,
          });
        })
        .catch(error => {
          console.error(`Trying to get categories with error : ${error}`);
        })
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