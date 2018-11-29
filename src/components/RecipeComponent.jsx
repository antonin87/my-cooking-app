import React, { Fragment } from 'react';
import { CookingContext} from '../context/CookingContext';

const RecipeComponent = (props) => {
const { loopIndex, recipe } = props;
    return(
        <li className={`menu-${loopIndex}`}>
            <div className={'icon'}>
            {recipe}
            <CookingContext.Consumer>
                {
                    ({toggleTheme}) => (
                        <button
                        onClick={toggleTheme}
                        >Toggle Theme</button>
                    )
                }
            </CookingContext.Consumer>

            </div>
          </li>
    )
};

export default RecipeComponent;