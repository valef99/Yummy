import {React} from "react";
import RecipeListData from "../../assets/data/food.json"
import style from "./Filter.module.css"
import clsx from "clsx";

const Filter = ({ filterItem, setItem, menuItems }) => {
    return (
        <>
            <div className={`d-flex justify-content-start mt-3 btn ${style.containerButtons}`}>
                <button type="checkbox"
                    className={clsx("btn-dark text-white p-1 px-3 me-2 fw-bold btn", style.buttonActive)}
                    onClick={() => setItem(RecipeListData)}>
                    All
                </button>
                {menuItems.map((Val, id) => {
                    return (
                        <button
                            className="btn-dark text-white p-1 px-2 me-2 btn fw-bold"
                            onClick={() => filterItem(Val)}
                            key={id}>
                            {Val}
                        </button>
                    );
                })}
            </div>
                </>
    );
};

export default Filter;