import React, {useEffect, useState} from "react";
import RecipeListData from "../../assets/data/food.json"
import RecipeType from "../../components/RecipeType/RecipeType";
import {NavLink, useParams} from "react-router-dom";
import style from "./RecipeDetail.module.css"

function RecipeDetail(props) {
    const apiKey = "7f6a875ba7534336a2123077bded04cd";
    let {number} = useParams();
    let id = parseInt(number);
    const currentRecipe = RecipeListData.filter((recipe) => recipe.id === id)[0];
    const [recipeData, setRecipeData] = useState([]);

    useEffect(() => {
       let isMounted = true;
        fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`)
            .then(res => res.json())
            .then(res => {
                if (isMounted)
                    setRecipeData(res);
            })
            .catch((error) => console.log("Error" + error));

        return () => {isMounted = false};
    },[id]);

    let ingredients = [];
    if (recipeData && recipeData.ingredients) {
        Object.keys(recipeData.ingredients).map((key) => {
            const types = "bho";
                return ingredients.push({
                    src: "https://spoonacular.com/cdn/ingredients_100x100/" + recipeData.ingredients[key].image,
                    name: recipeData.ingredients[key].name, quantity: recipeData.ingredients[key].amount.us.value,
                    unit: recipeData.ingredients[key].amount.us.unit
                })
        });
    }

    return(
        <div>sto visualizzando la ricetta {id}
            <div>
                {ingredients &&
                    <table>
                        {ingredients.map((ingredient) => {
                            return <tr>
                                        <td><img src={ingredient.src} alt={ingredient.name}/></td>
                                        <td>{ingredient.name}</td>
                                        <td>{ingredient.quantity + ingredient.unit}</td>
                            </tr>
                        })}
                    </table>
                }
            </div>
        </div>
    );
}

export default RecipeDetail;