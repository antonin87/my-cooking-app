import axios from 'axios';

class Recipe {
    
    constructor() {
       
    }

    async getAllRecipe() {
        try {
            const response = await axios.get('http://127.0.0.1:8080/api/mocks/recipe.json');
            return response;
        }
        catch (error) {
            console.error('Error to get http request with details >>', error);
        }
           
        
    }
}

export default Recipe;