import {React, useEffect, useRef} from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeListData from "../../assets/data/food.json"
import RecipesCardsGrid from "../../components/RecipesCardsGrid/RecipesCardsGrid";
import RecipesListData from "../../assets/data/food.json";
import style from "./Home.module.css"
import {NavLink} from "react-router-dom";
import Wallpaper from "../../assets/images/wallpaper.jpeg"
import lottie from "lottie-web";

function Home() {
    var filteredList = [];
    while(filteredList.length < 6){
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
    const animation= useRef(null);
useEffect(() => {
    lottie.loadAnimation({
        container: animation.current, // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        animationData: require('../../assets/data/dado.json')
    })
}, []);

    return(
        <div>
            <div  className={`d-grid mb-5 ${style.wallpaper}`}>
                <img src={Wallpaper}/>
                <h1>Yummy Recipes!</h1>
                <div className="mb-5 pb-5">
                    <NavLink className="btn buttons" to="/recipes">Let's cook!</NavLink>
                </div>
            </div>
            <div className="container">
                <div className={`d-flex flex-row ${style.animationContainer}`}>
                    <div className={`animation ${style.animation}`}  ref={animation}> </div>
                    <h2 className={`mb-4 mt-4 align-self-center ${style.subtitle}`}>Some random recipes</h2>
                </div>
                <div className={`row 
                        row-cols-1
                        row-cols-sm-2
                        row-cols-md-3
                        row-cols-lg-3
                        row-cols-xl-3
                `}>
                    {recipeCards}
                </div>
            </div>
        </div>
    );
}

export default Home;