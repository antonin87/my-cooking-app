import axios from 'axios';

class CategoryModel {
    async fetchCategories() {
        try {
            const response = await axios.get('http://127.0.0.1:8080/api/mocks/category.json');
            return response;
        }
        catch (error) {
            console.error('Error to get http request with details >>', error);
        } 
    }
}

export default CategoryModel;