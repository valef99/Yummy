import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipesCardsGrid(props) {
    const {RecipesList, col} = props;
    const recipeCardsCol = RecipesList.map((recipe) => {
        return(
            <div key={recipe.id} className="col">
                <RecipeCard
                    name={recipe.title}
                    number={recipe.id}
                    image={recipe.image}/>
            </div>
        );
    });

    return(
        <div className={`row 
                row-cols-${col.xs}
                row-cols-sm-${col.sm}
                row-cols-md-${col.md}
                row-cols-lg-${col.lg}
                row-cols-xl-${col.xl}
        `}>
            {recipeCardsCol}
        </div>
    );
}

export default RecipesCardsGrid;