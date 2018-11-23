import React, { Fragment } from 'react';
import { CookingContext } from './../context/CookingContext';


const RecipeComponent = (props) => {

const { loopIndex, recipe } = props;

    return(
        <li className={`menu-${loopIndex}`}>
        <div className="border"></div>
        <span className={'icon'}>{recipe}</span>
        <CookingContext.Consumer>
        {
            ({theme, toggleTheme}) => (
                <button
                onClick={toggleTheme}
                >Toggle Theme</button>
            )
        }
        </CookingContext.Consumer>    
</li>
    )



};

export default RecipeComponent;