import React from 'react';
import RecipeCategory from './../../atoms/RecipeCategory';
import ClipPath from '../../atoms/ClipPath';

const Wheel = ({categories}) => {
  return (
    <div className={`menu-wrap`}>
      <ul className={`menu`} >
        {categories.map((category) => (
          <RecipeCategory 
                category={category}
                key={category._id} 
          />
        ))}
      </ul>
      <ClipPath />
    </div>
    )
}

export default Wheel;
