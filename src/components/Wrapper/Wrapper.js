import React from "react";
import {useParams} from "react-router-dom";
import RecipesListData from "../../assets/data/food.json"
import RecipeDetail from "../../views/RecipeDetail/RecipeDetail";
import Default from "../../views/Default/Default";
import {checkNumber} from "../../utility/utility";

const Wrapper = () => {
    let {number} = useParams();
    let id = parseInt(number);
    return (
        <>
            {
                checkNumber(RecipesListData,id) ?
                    <RecipeDetail/>
                    :
                    <Default/>
            }
        </>
    );
};
export default Wrapper;