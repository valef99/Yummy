import {React} from "react";
import RecipeListData from "../../assets/data/food.json"

const Filter = ({ filterItem, setItem, menuItems }) => {
    return (
        <>
            <div className="d-flex justify-content-center">
                {menuItems.map((Val, id) => {
                    return (
                        <button
                            className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                            onClick={() => filterItem(Val)}
                            key={id}
                        >
                            {Val}
                        </button>
                    );
                })}
                <button
                    className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
                    onClick={() => setItem(RecipeListData)}
                >
                    All
                </button>
                <button
                  className="btn-warning text-white p-1 mx-5"
                  onClick={() => filterItem("vegetarian")}
                >
                  Vegetarian
                </button>
                <button
                  className="btn-warning text-white p-1 px-2 mx-5"
                  onClick={() => filterItem("vegan")}
                >
                  Vegan
                </button>
                <button
                  className="btn-warning text-white p-1 mx-5"
                  onClick={() => filterItem("gluten free")}
                >
                  Gluten free
                </button>
                    </div>
                </>
    );
};

export default Filter;