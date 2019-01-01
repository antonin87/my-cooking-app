import axios from 'axios';

class RecipeCatalog {
    async fetchRecipes() {
        try {
            const response = await axios.get('http://127.0.0.1:8080/api/mocks/recipe.json');
            return response;
        }
        catch (error) {
            console.error('Error to get request with details >>', error);
        } 
    }

    /**
     * Get recipe by type
     * @param {*} recipes 
     * @param {*} urlName 
     */
    getRecipeByCategory(recipes, urlNameCategory) {
        const categoryRecipes = recipes.filter(recipe => {
            return recipe.urlName === urlNameCategory;
        })
        return categoryRecipes;
    }
}

export default RecipeCatalog;