import logo from "../assets/images/yummy_logo.png"
import RecipeListData from "../assets/data/food.json";

export const recipeDefaultImage = (onErrorEvent) =>  onErrorEvent.target.src = logo;

export const checkNumber = (recipeList, number) =>  {
    return RecipeListData.map(recipe => recipe.id).indexOf(number) !== -1;
}
