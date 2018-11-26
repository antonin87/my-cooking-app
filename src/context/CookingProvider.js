import React, { Component } from "react";
import {themes, CookingContext} from './CookingContext';
import CategoryModel from './../models/CategoryModel';


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
      /**
       * la propriété value est très importante ici, elle rend
       * le contenu du state disponible aux `Consumers` de l'application
       */
      <CookingContext.Provider value={this.state}>
        {this.props.children}
      </CookingContext.Provider>
    );
  }
}

export default CookingProvider;