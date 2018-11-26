import React from 'react';
import RecipeCategory from './RecipeCategory';
import { CookingContext } from './../../context/CookingContext';

export default (props) => (
    
    <CookingContext.Consumer>
    {
        ({toggleTheme}) => 
        (
            <RecipeCategory 
                toggleTheme={toggleTheme} 
                id={props.id} 
                category={props.category} 
            />
        )
    }
    </CookingContext.Consumer>
)