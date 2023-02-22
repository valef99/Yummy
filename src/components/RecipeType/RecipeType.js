import React from "react";
import RecipeListData from "../../assets/data/food.json";
import style from "./RecipeType.module.css";
import Vegetarian from "../../assets/images/vegetarian.png";
import VegetarianDisable from "../../assets/images/vegetarian_Disabled.png";
import Vegan from "../../assets/images/vegan.png";
import VeganDisable from "../../assets/images/vegan_Disabled.png";
import GlutenFree from "../../assets/images/GlutenFree.png";
import GlutenFreeDisable from "../../assets/images/GlutenFree_Disabled.png";
import {UncontrolledTooltip} from "reactstrap";

function RecipeType(props) {
    const {id} = props;
    const currentRecipe = RecipeListData.filter((recipe) => recipe.id === id)[0];
    const types = {vegetarian: currentRecipe.vegetarian, vegan: currentRecipe.vegan, glutenFree: currentRecipe.glutenFree};

    return(
        <div className="d-flex flex-row">
            {types.vegetarian ?
                <div>
                    <img src={Vegetarian} id="vegetarian" className={style.types}/>
                    <UncontrolledTooltip placement="bottom" target="vegetarian">
                        Vegetarian
                    </UncontrolledTooltip>
                </div>
                :
                <div>
                    <img src={VegetarianDisable} id="vegetarian_disable" className={style.types}/>
                    <UncontrolledTooltip placement="bottom" target="vegetarian_disable">
                        Not Vegetarian
                    </UncontrolledTooltip>
                </div>
            }
            {types.vegan ?
                <div>
                    <img src={Vegan} id="vegan" className={style.types}/>
                    <UncontrolledTooltip placement="bottom" target="vegan">
                        Vegan
                    </UncontrolledTooltip>
                </div>
                :
                <div>
                    <img src={VeganDisable} id="vegan_disable" className={style.types}/>
                    <UncontrolledTooltip placement="bottom" target="vegan_disable">
                        Not Vegan
                    </UncontrolledTooltip>
                </div>
            }
            {types.glutenFree ?
                <div>
                    <img src={GlutenFree} id="glutenfree" className={style.types}/>
                    <UncontrolledTooltip placement="bottom" target="glutenfree">
                        Gluten free
                    </UncontrolledTooltip>
                </div>
                :
                <div>
                    <img src={GlutenFreeDisable} id="glutenfree_disable" className={style.types}/>
                    <UncontrolledTooltip placement="bottom" target="glutenfree_disable">
                        With Gluten
                    </UncontrolledTooltip>
                </div>
            }
        </div>
    );
}

export default RecipeType;