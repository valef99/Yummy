import React, {useEffect, useState} from "react";
import RecipeListData from "../../assets/data/food.json"
import RecipeType from "../../components/RecipeType/RecipeType";
import {NavLink, useParams} from "react-router-dom";
import style from "./RecipeDetail.module.css";
import {ListGroup, ListGroupItem, Progress} from 'reactstrap';
import RecipeCategory from "../../components/RecipeCategory/RecipeCategory";
import Time from "../../assets/images/timer.png"
import People from "../../assets/images/people.png"

function RecipeDetail(props) {
    const apiKey = "7f6a875ba7534336a2123077bded04cd";
    let {number} = useParams();
    let id = parseInt(number);
    const currentRecipe = RecipeListData.filter((recipe) => recipe.id === id)[0];
    const index = RecipeListData.map(recipe => recipe.id).indexOf(currentRecipe.id);

    const [recipeData, setRecipeData] = useState([]);
    const [recipeKcal, setRecipeKcal] = useState([]);
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

    useEffect(() => {
        let isMounted = true;
        fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`)
            .then(res => res.json())
            .then(res => {
                if (isMounted)
                    setRecipeKcal(res);
            })
            .catch((error) => console.log("Error" + error));

        return () => {isMounted = false};
    },[id]);

    let ingredients = [];
    if (recipeData && recipeData.ingredients) {
        Object.keys(recipeData.ingredients).map((key) => {
                return ingredients.push({
                    src: "https://spoonacular.com/cdn/ingredients_100x100/" + recipeData.ingredients[key].image,
                    name: recipeData.ingredients[key].name, quantity: recipeData.ingredients[key].amount.us.value,
                    unit: recipeData.ingredients[key].amount.us.unit
                })
        });
    }

    let kcal = recipeKcal.calories;

    return(
        <div className="container">
            <div className={style.navigation}>
                {index !== 0 &&
                    <NavLink className={`${style.prev} ${style.navItem}`}
                             to={`/recipes/${RecipeListData[index-1].id}`}>&lt;</NavLink>
                }
                {index+1 < Object.keys(RecipeListData).length &&
                    <NavLink className={`${style.next} ${style.navItem}`}
                             to={`/recipes/${RecipeListData[index+1].id}`}>&gt;</NavLink>
                }
            </div>
            <div className={`row rounded-3 ${style.containers}`}>
                <div className={`col-4 p-0 rounded-3 d-grid align-items-start mb-5 mt-5 ${style.grid}`}>
                    <img src={currentRecipe.image} className={`ps-5 ${style.recipe}`}/>
                    {kcal &&
                        <div className={`rounded-circle d-flex justify-content-center align-items-center m-2 ${style.kcal}`}>
                            <p className="text-center small">
                                {kcal.toString().substring(0, kcal.toString().length-1) + " Kcal"}
                            </p>
                        </div>
                    }
                </div>
                <div className="col-8 p-5">
                    <div className="row">
                        <div className="col">
                            <h2>{currentRecipe.title}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex flex-row mb-3 mt-3 align-items-center">
                                <img src={Time} className={style.ingredient}/>
                                <p><strong>{currentRecipe.readyInMinutes}</strong> minutes</p>
                            </div>
                            <div className="d-flex flex-row mb-3 align-items-center">
                                <img src={People} className={style.ingredient}/>
                                <p><strong>{currentRecipe.servings}</strong> people</p>
                            </div>
                        </div>

                        <div className="col-6 mb-2 d-flex flex-row align-items-center">
                            <h5 className="mb-1 me-4">Categories</h5>
                            <RecipeCategory id={id}/>
                        </div>

                        <div className="col-5">
                            <h5 className="mb-3">Health Score</h5>
                            <Progress className="mb-2" striped color="success" value={currentRecipe.healthScore}>{currentRecipe.healthScore + "%"}</Progress>
                        </div>
                        <div className="col-6 offset-1 mb-2 d-flex flex-row align-items-center">
                            <h5 className="mb-1 me-4">Diets</h5>
                            <RecipeType id= {id}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {ingredients &&
                    <div className={`row mt-5 mb-5 p-5 rounded-3 ${style.containers}`}>
                        <h2 className="pb-3">Ingredients</h2>
                        {ingredients.map((ingredient) => {
                            return (
                                <div className="d-flex flex-row align-items-center col-6 pb-3">
                                    <img src={ingredient.src} alt={ingredient.name} className={style.ingredient}/>
                                    <div>
                                        <p><strong>{ingredient.quantity + " " + ingredient.unit}</strong> {ingredient.name}</p>
                                    </div>
                                 </div>
                            );
                        })}
                    </div>
                }
            </div>
            <div className={`row p-5 rounded-3 ${style.containers}`}>
                <div className="col">
                    <h2 className="pb-3">Let's cook!</h2>
                    <ol>
                        {steps.map((stepi) => {
                            return (
                                <li className="pb-3">
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