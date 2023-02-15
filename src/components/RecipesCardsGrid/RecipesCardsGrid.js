import {React, useState} from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import style from "../../views/Recipes/Recipes.module.css";
import clsx from "clsx";
import Filter from "../Filter/Filter";

function RecipesCardsGrid(props) {
    const {RecipesList, col, filter} = props;
    const [item, setItem] = useState(RecipesList);

    const menuItems = [...new Set(["Vegetarian", "Vegan", "Gluten free"])];

    const filterItem = (curcat) => {
        const newItem = RecipesList.filter((recipe) => {
            for(let i=0; i<recipe.diets.length; i++){
                if(recipe.diets[i].includes(curcat.toLowerCase())){
                    return true;
                }

            }
            return false;
        });
        setItem(newItem);
    };

    const recipeCardsCol = item.map((recipe) => {
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
        <div>
            <div className="row justify-self-end">
                <Filter
                    filterItem={filterItem}
                    setItem={setItem}
                    menuItems={menuItems}/>
            </div>
            <div className={`row 
                    row-cols-${col.xs}
                    row-cols-sm-${col.sm}
                    row-cols-md-${col.md}
                    row-cols-lg-${col.lg}
                    row-cols-xl-${col.xl}
            `}>
                {recipeCardsCol}
            </div>
        </div>
    );
}

export default RecipesCardsGrid;