import {React, useState} from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import Filter from "../Filter/Filter";
import RecipesListData from "../../assets/data/food.json";
import style from "./RecipesCardsGrid.module.css"

function RecipesCardsGrid(props) {
    const {RecipesList, col, user} = props;
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
            <div key={recipe.id} className="col mb-4">
                <RecipeCard
                    name={recipe.title}
                    number={recipe.id}
                    image={recipe.image}
                    user={user}/>
            </div>
        );
    });

    return(
        <div>
            <div className="row justify-self-end mb-4">
                <Filter
                    filterItem={filterItem}
                    setItem={setItem}
                    menuItems={menuItems}/>
            </div>
            <p className="pb-4">You have <strong>{RecipesListData.length}</strong> recipes to explore!</p>
            <div className={`row 
                    row-cols-${col.xs}
                    row-cols-sm-${col.sm}
                    row-cols-md-${col.md}
                    row-cols-lg-${col.lg}
                    row-cols-xl-${col.xl}
                    p-3
                    py-5
                    ${style.containerCards}
            `}>
                {recipeCardsCol}
            </div>
        </div>
    );
}

export default RecipesCardsGrid;