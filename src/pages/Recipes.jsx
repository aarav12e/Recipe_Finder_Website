import { useEffect, useState, useCallback } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../services/api";

const Recipes = () => {
    const [searchedQuery, setSearchedQuery] = useState('pizza');
    const [recipes, setRecipes] = useState([]);

    const getSearchedResult = useCallback(async () => {
        let result = await getRecipes(searchedQuery);
        if (result && result.recipes) {
            setRecipes(result.recipes);
        }
    }, [searchedQuery])

    useEffect(() => {
        getSearchedResult();
    }, [getSearchedResult])

    return (
        <>
            <Search setSearchedQuery={setSearchedQuery} />
            <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
        </>
    )
}

export default Recipes;