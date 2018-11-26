import React from 'react';

const RecipeCategory = (props) => {

const { category, toggleTheme, match } = props;
    
    return(
        <li className={`menu-${category._id}`}>
            <div className="border"></div>
            <div className={'icon'}>{category.title}
                <button
                onClick={toggleTheme}
                >Toggle Theme</button>
            </div>
        </li>
        
    )
};

export default RecipeCategory;