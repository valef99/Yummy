import logo from "../assets/images/yummy_logo.png"

export const recipeDefaultImage = (onErrorEvent) =>  onErrorEvent.target.src = logo;

export const checkNumber = (recipeList, number) =>  recipeList.indexOf(number) != -1;
