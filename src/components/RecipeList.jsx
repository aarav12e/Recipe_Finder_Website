import { Container, Header, Grid } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RecipeList = ({ recipes, searchedQuery }) => {
    const listRef = useRef(null);

    useGSAP(() => {
        if (recipes && recipes.length > 0) {
            gsap.from(".recipe-card-col", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });
        }
    }, { dependencies: [recipes], scope: listRef });

    return (
        <Container ref={listRef}>
            <Header 
                size="huge"
                content={`RECIPE LIST FOR ${searchedQuery}`}
                textAlign='center'
            />
            <Grid columns={4} doubling>
                { 
                    recipes && recipes.map(recipe => (
                        <Grid.Column key={recipe.recipe_id} className="recipe-card-col">
                            <RecipeListItem recipe={recipe} />
                        </Grid.Column>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default RecipeList;