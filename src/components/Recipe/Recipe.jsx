import React from 'react';
import RecipeModel from '../../models/RecipeModel';

class Recipe extends React.Component { 
    state = 
        { 
            recipes: [], 
            filteredRecipes: [],
            categoryId: null
        }

    componentDidMount() {
        this.recipeModel = new RecipeModel();
        const {match} = this.props;
        const categoryId = parseInt(match.params.categoryId);
        this.recipeModel.fetchRecipes()
            .then(response => {
                this.setState({recipes: response.data, categoryId})
            })
            .catch(error => {
                console.error(`Trying to get recipes with error : ${error}`);
            })
    }

    componentDidUpdate(prevProps, prevState) {
        const {match} = this.props;
        const categoryId = parseInt(match.params.categoryId);
        const filteredRecipes = this.recipeModel.getRecipeByCategory(this.state.recipes, categoryId);
        if (prevState.categoryId !== categoryId) {
            this.setState({filteredRecipes, categoryId})
      }
    }
    
    render() {
        return(
            <div class="recipes">
                {
                    this.state.filteredRecipes.length > 0 ?
                    this.state.filteredRecipes.map(recipe => (
                    <h1>{recipe.title}</h1>
                    ))
                    :
                    <h1>no results ...</h1>
                }
            </div>
        )
    }
};

export default Recipe;