import React, {Component} from 'react';
import RecipeCategory from './RecipeCategory';
import { CookingContext } from './../../../context/CookingContext';

export default class extends Component {

    render() {
        const {id, category} = this.props;
        return (
            <CookingContext.Consumer>
            {
                ({theme, toggleTheme}) => 
                (
                    <RecipeCategory
                        theme={theme}
                        toggleTheme={toggleTheme} 
                        id={id} 
                        category={category} 
                    />
                )
            }
            </CookingContext.Consumer>
        )
    }
}
