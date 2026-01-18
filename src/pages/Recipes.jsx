import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from 'react-router-dom';
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../services/api";

const Recipes = () => {
    const [searchParams] = useSearchParams();
    const queryFromUrl = searchParams.get('search');
    const [searchedQuery, setSearchedQuery] = useState(queryFromUrl || 'pizza');
    const [recipes, setRecipes] = useState([]);

    const getSearchedResult = useCallback(async () => {
        let result = await getRecipes(searchedQuery);
        if (result && result.recipes) {
            setRecipes(result.recipes);
        }
    }, [searchedQuery])

    useEffect(() => {
        // Update searchedQuery if URL param changes
        if (queryFromUrl) {
            setSearchedQuery(queryFromUrl);
        }
    }, [queryFromUrl]);

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