import React from "react";
import RecipeListData from "../../assets/data/food.json";
import style from "./RecipeCategory.module.css";
import Appetizer from "../../assets/images/appetizer.png";
import Breakfast from "../../assets/images/breakfast.png";
import Dessert from "../../assets/images/dessert.png";
import Drink from "../../assets/images/drink.png";
import MainDish from "../../assets/images/main-dish.png";
import SideDish from "../../assets/images/side-dish.png";
import {UncontrolledTooltip} from "reactstrap";

function RecipeCategory(props) {
    const {id} = props;
    const currentRecipe = RecipeListData.filter((recipe) => recipe.id === id)[0];
    const category = {appetizer: currentRecipe.dishTypes.some((category) => category === "appetizer"),
        breakfast: currentRecipe.dishTypes.some((category) => category === "breakfast"),
        dessert: currentRecipe.dishTypes.some((category) => category === "dessert"),
        drink: currentRecipe.dishTypes.some((category) => (category === "drink") || (category === "beverage")),
        mainDish: currentRecipe.dishTypes.some((category) => category === "main dish"),
        sideDish: currentRecipe.dishTypes.some((category) => category === "side dish")
    };

    return(
        <div className="d-flex flex-row">
            {
                category.appetizer &&
                    <div>
                    <img src={Appetizer} id="appetizer" className={style.category}/>
                    <UncontrolledTooltip placement="bottom" target="appetizer">
                        Appetizer
                    </UncontrolledTooltip>
                    </div>
            }
            {
                category.breakfast &&
                <div>
                    <img src={Breakfast} id="breakfast" className={style.category}/>
                    <UncontrolledTooltip placement="bottom" target="breakfast">
                        Breakfast
                    </UncontrolledTooltip>
                </div>
            }
            {
                category.dessert &&
                <div>
                    <img src={Dessert} id="dessert" className={style.category}/>
                    <UncontrolledTooltip placement="bottom" target="dessert">
                        Dessert
                    </UncontrolledTooltip>
                </div>
            }
            {
                category.drink &&
                <div>
                    <img src={Drink} id="drink" className={style.category}/>
                    <UncontrolledTooltip placement="bottom" target="drink">
                        Drink
                    </UncontrolledTooltip>
                </div>
            }
            {
                category.mainDish &&
                <div>
                    <img src={MainDish} id="mainDish" className={style.category}/>
                    <UncontrolledTooltip placement="bottom" target="mainDish">
                        Main Dish
                    </UncontrolledTooltip>
                </div>
            }
            {
                category.sideDish &&
                <div>
                    <img src={SideDish} id="sideDish" className={style.category}/>
                    <UncontrolledTooltip placement="bottom" target="sideDish">
                        Side Dish
                    </UncontrolledTooltip>
                </div>
            }
        </div>
    );
}

export default RecipeCategory;