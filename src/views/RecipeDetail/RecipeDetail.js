import React, {useEffect, useState} from "react";
import RecipeListData from "../../assets/data/food.json"
import RecipeType from "../../components/RecipeType/RecipeType";
import {NavLink, useParams} from "react-router-dom";
import style from "./RecipeDetail.module.css";
import {ListGroup, ListGroupItem, Progress} from 'reactstrap';
import RecipeCategory from "../../components/RecipeCategory/RecipeCategory";

function RecipeDetail(props) {
    const apiKey = "7f6a875ba7534336a2123077bded04cd";
    let {number} = useParams();
    let id = parseInt(number);
    const currentRecipe = RecipeListData.filter((recipe) => recipe.id === id)[0];
    const [recipeData, setRecipeData] = useState([]);
    const steps = currentRecipe.analyzedInstructions[0].steps;

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
        <div className="container">sto visualizzando la ricetta {id}
            <div className="row">
                <div className="col-4">
                    <img src={currentRecipe.image} className={style.recipe}/>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col">
                            <h1>{currentRecipe.title}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <p>{currentRecipe.readyInMinutes + " minutes"}</p>
                            <p>{currentRecipe.servings + " people"}</p>
                            <p>Health Score</p>
                            <Progress striped color="success" value={currentRecipe.healthScore}>{currentRecipe.healthScore + "%"}</Progress>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <RecipeCategory id={id}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <RecipeType id= {id}/>
                </div>
            </div>
            <div>
                {ingredients &&
                    <div className="row">
                        {ingredients.map((ingredient) => {
                            return (
                                <div className="d-flex flex-row align-items-center col-6">
                                    <img src={ingredient.src} alt={ingredient.name} className={style.ingredient}/>
                                    <div>
                                        <p>{ingredient.name}</p>
                                        <p>{ingredient.quantity + " " + ingredient.unit}</p>
                                    </div>
                                 </div>
                            );
                        })}
                    </div>
                }
            </div>
            <div className="row">
                <div className="col">
                    <h2>Let's cook!</h2>
                    <ol>
                        {steps.map((stepi) => {
                            return (
                                <li>
                                    {stepi.step}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetail;