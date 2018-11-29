import React, { Fragment, Component } from 'react';
import Recipe from '../models/Recipe';
import RecipeComponent from './RecipeComponent/RecipeComponent';
import { CookingContext} from '../context/CookingContext';
import ClipPath from './ClipPath';
class Wheel extends React.Component {

state = {recipes: [], recipesCategories: []};

componentDidMount() {
  this.recipe = new Recipe();
  this.recipe.getAllRecipe()
      .then((response) => {
        this.setState({
          recipes: response.data,
          recipesCategories: ['Hors d\'oeuvre','Entrées', 'Plats', 'Desserts', 'Patisseries', 'Specialités']
        });
      })
      .catch(error => {
        console.error(error);
      })     
}


render() {
    return (
      <Fragment>
      <CookingContext.Consumer>
        {
          ({theme}) => (
          <div className={'menu-wrapper'} style={{backgroundColor: theme.background}}>
            <ul className="menu">
              {this.state.recipesCategories.map((recipesCategory, id) => (
                <RecipeComponent recipe={recipesCategory} loopIndex={id} key={id} />
              ))}
          </ul>
        </div>
        )
        }
    </CookingContext.Consumer>
    <ClipPath />
    </Fragment>
  
    )
  }
}

export default Wheel;
