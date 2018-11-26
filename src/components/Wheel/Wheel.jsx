import React, { Fragment } from 'react';
import RecipeCategory from './../RecipeCategory';
import ClipPath from '../ClipPath';
import { Link } from 'react-router-dom';

const Wheel = ({categories, theme}) =>{
return (
        <div className={'menu-wrap'} style={{backgroundColor: theme.background}}>
          <ul className="menu">
            {categories.map((category) => (
              <Fragment>
                <Link to={`/recipe/${category._id}`}>
                  <RecipeCategory 
                    category={category}
                    key={category.id} 
                  />
                </Link>
              </Fragment>
            ))}
          </ul>
          <ClipPath />
        </div>
    )
}

export default Wheel;
