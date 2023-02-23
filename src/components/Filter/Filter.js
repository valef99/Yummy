import {React, useState} from "react";
import RecipeListData from "../../assets/data/food.json"
import style from "./Filter.module.css"
import clsx from "clsx";

const Filter = ({ filterItem, setItem, menuItems }) => {
    return (
        <>
            <div className={`d-flex justify-content-start mt-3 ${style.containerButtons}`}>
                <button type="checkbox"
                    className="p-1 px-2 me-2 btn fw-bold buttons"
                    onClick={() => setItem(RecipeListData)}>
                    All
                </button>
                {menuItems.map((Val, id) => {
                    return (
                        <button
                            className= "p-1 px-2 me-2 btn fw-bold buttons"
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