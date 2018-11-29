import React, { Fragment, Component } from 'react';
import Recipe from './../../models/Recipe';
import RecipeComponent from '../RecipeComponent';
import ClipPath from './../../components/ClipPath';

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
          <div className={'menu-wrapper'} style={{backgroundColor: this.props.theme.background}}>
            <ul className="menu">
              {this.state.recipesCategories.map((recipesCategory, id) => (
                <RecipeComponent recipe={recipesCategory} loopIndex={id} key={id} />
              ))}
          </ul>
        </div>
    <ClipPath />
    </Fragment>
  
    )
  }
}

export default Wheel;
