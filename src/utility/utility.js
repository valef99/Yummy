import logo from "../assets/images/yummy_logo.png"
import RecipeListData from "../assets/data/food.json";
import profileImage from "../assets/images/defaultProfile.png";

export const recipeDefaultImage = (onErrorEvent) =>  onErrorEvent.target.src = logo;

export const checkNumber = (recipeList, number) =>  {
    return RecipeListData.map(recipe => recipe.id).indexOf(number) !== -1;
}

export const checkFav = (favList, fav) => {
    return favList.includes(fav);
}

export const profileDefaultImage = (onErrorEvent) =>  onErrorEvent.target.src = profileImage;