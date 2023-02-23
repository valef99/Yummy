import React, {useState} from "react";
import RecipesTable from "../../components/RecipesTable/RecipesTable";
import RecipesCardsGrid from "../../components/RecipesCardsGrid/RecipesCardsGrid";
import style from "./Recipes.module.css"
import clsx from "clsx";
import RecipesListData from "../../assets/data/food.json"
import Grid from "../../assets/images/grid.png"
import Table from "../../assets/images/table.png"

function Recipes() {
    const[displayGrid, setDisplayGrid] = useState("true");

    return(
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-end">
                    <div className={style.switch}>
                        <div className={clsx(style.option, {[style.active]: displayGrid})}
                             onClick={() => setDisplayGrid(true)}>
                            <img src={Grid}/>
                        </div>
                        <div className={clsx(style.option, {[style.active]: !displayGrid})}
                             onClick={() => setDisplayGrid(false)}>
                            <img src={Table}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col">
                    { displayGrid ?
                        (<RecipesCardsGrid
                                RecipesList={RecipesListData}
                                col={{xs:1, sm:2, md:3, lg:3, xl:3}}/>)
                        :
                        (<RecipesTable RecipesList={RecipesListData}/>)}
                </div>
            </div>
        </div>
    );
}

export default Recipes;