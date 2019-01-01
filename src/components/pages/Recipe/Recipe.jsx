import React from 'react';
import RecipeModel from '../../../models/RecipeModel';

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
        const categoryUrlName = match.params.urlName;
        this.recipeModel.fetchRecipes()
            .then(response => {
                this.setState({recipes: response.data, categoryUrlName})
            })
            .catch(error => {
                console.error(`Trying to get recipes with error : ${error}`);
            })
    }

    componentDidUpdate(prevProps, prevState) {
        const {match} = this.props;
        const categoryUrlName = match.params.urlName;
        const filteredRecipes = this.recipeModel.getRecipeByCategory(this.state.recipes, categoryUrlName);
        if (prevState.categoryUrlName !== categoryUrlName) {
            this.setState({filteredRecipes, categoryUrlName})
      }
    }
    
    render() {
        return(
            
            <div className="recipes">
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