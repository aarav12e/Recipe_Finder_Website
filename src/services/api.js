import axios from 'axios';
import { API_URL } from '../constants/constant';
import { hardcodedRecipesList, hardcodedRecipeDetails } from '../constants/hardcodedRecipes';

export const getRecipes = async (searchedQuery) => {
    try {
        const queryLower = searchedQuery?.toLowerCase().trim();
        if (hardcodedRecipesList[queryLower]) {
            return { recipes: hardcodedRecipesList[queryLower] };
        }
        let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response
    }
}

export const getRecipe = async (searchedQuery) => {
    try {
        if (hardcodedRecipeDetails[searchedQuery]) {
            return { recipe: hardcodedRecipeDetails[searchedQuery] };
        }
        let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response
    }
}