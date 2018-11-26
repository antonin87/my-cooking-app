import React, {Component} from 'react';
import Wheel from './Wheel';
import { CookingContext } from './../../context/CookingContext';
import CategoryModel from './../../models/CategoryModel';

export default class extends Component {
    
    state = { categories: [] };

    componentDidMount(){
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
        return(
            <CookingContext.Consumer>
            {
                ({theme}) => (<Wheel theme={theme} categories={this.state.categories} />)
            }
            </CookingContext.Consumer>
        )
    }

}