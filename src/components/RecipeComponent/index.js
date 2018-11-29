import React from 'react';
import RecipeComponent from './RecipeComponent';
import {CookingContext} from './../../context/CookingContext';

export default (props) => (
    <CookingContext.Consumer>
    {
        ({toggleTheme}) => 
        <RecipeComponent
            loopIndex={props.loopIndex} 
            recipe={props.recipe} 
            toggleTheme={toggleTheme} 
        />
    }
    </CookingContext.Consumer>
)