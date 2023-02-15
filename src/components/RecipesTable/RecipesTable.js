import {React, useState} from "react";
import RecipeType from "../RecipeType/RecipeType";
import style from "./RecipesTable.module.css"
import {NavLink} from "react-router-dom";
import Filter from "../Filter/Filter";

function RecipesTable(props) {
    const {RecipesList} = props;
    const [item, setItem] = useState(RecipesList);

    const menuItems = [...new Set(["Vegetarian", "Vegan", "Gluten free"])];

    const filterItem = (curcat) => {
        const newItem = RecipesList.filter((recipe) => {
            for(let i=0; i<recipe.diets.length; i++){
                if(recipe.diets[i].includes(curcat.toLowerCase())){
                    return true;
                }

            }
            return false;
        });
        setItem(newItem);
    };

    const recipeTr = item.map((recipe) => {
        return(
            <tr key={recipe.id}>
                <td>{recipe.id}</td>
                <td>
                    <img src={recipe.image}/>
                </td>
                <td>{recipe.title}</td>
                <td>
                    <RecipeType id={recipe.id}/>
                </td>
                <td><NavLink className={style.action} to={`/recipes/${recipe.id}`}>Ricetta</NavLink></td>
            </tr>
        );
    });

    return(
        <div>
            <div className="row justify-self-end">
                <Filter
                    filterItem={filterItem}
                    setItem={setItem}
                    menuItems={menuItems}/>
            </div>
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
        </div>
    );
}

export default RecipesTable;