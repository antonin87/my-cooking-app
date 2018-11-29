import React, { Fragment } from 'react';

const RecipeComponent = (props) => {
const { loopIndex, recipe, toggleTheme } = props;
    return(
        <li className={`menu-${loopIndex}`}>
            <div className={'icon'}>
                {recipe}
                     <button
                    onClick={toggleTheme}
                    >Toggle Theme</button>
            </div>
          </li>
    )
};

export default RecipeComponent;