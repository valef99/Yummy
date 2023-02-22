import React from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeListData from "../../assets/data/food.json"
import RecipesCardsGrid from "../../components/RecipesCardsGrid/RecipesCardsGrid";
import RecipesListData from "../../assets/data/food.json";
import style from "./Home.module.css"
import {NavLink} from "react-router-dom";

function Home() {
    var filteredList = [];
    while(filteredList.length < 9){
        var r = Math.floor(Math.random() * 99);
        if(filteredList.indexOf(r) === -1)
            filteredList.push(RecipesListData[r]);
    }

    const recipeCards = filteredList.map((recipe) => {
        return(
            <div key={recipe.id} className="col mb-4">
                <RecipeCard
                    name={recipe.title}
                    number={recipe.id}
                    image={recipe.image}/>
            </div>
        );
    });


    return(
        <div className="container">
            <div className={`row 
                    row-cols-1
                    row-cols-sm-2
                    row-cols-md-3
                    row-cols-lg-3
                    row-cols-xl-3
            `}>
                {recipeCards}
            </div>
            <div className="row justify-content-center">
                <div className="col-2 mb-5 pb-5">
                    <NavLink className="button btn btn-dark" to="/recipes">Let's cook!</NavLink>
                </div>

            </div>
        </div>
    );
}

export default Home;