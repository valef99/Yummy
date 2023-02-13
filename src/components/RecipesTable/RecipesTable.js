import React from "react";
import RecipeType from "../RecipeType/RecipeType";
import style from "./RecipesTable.module.css"
import {NavLink} from "react-router-dom";

function RecipesTable(props) {
    const {RecipesList} = props;
    const recipeTr = RecipesList.map((recipe) => {
        const types = "bho";
        return(
            <tr key={recipe.id}>
                <td>{recipe.id}</td>
                <td>
                    <img src={recipe.image}/>
                </td>
                <td>{recipe.title}</td>
                <td>{types}</td>
                <td><NavLink className={style.action} to={`/recipes/${recipe.id}`}>Ricetta</NavLink></td>
            </tr>
        );
    });

    return(
        <table className={`table ${style.table}`}>
            <thead>
            <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Type</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {recipeTr}
            </tbody>
        </table>
    );
}

export default RecipesTable;