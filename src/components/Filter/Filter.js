import {React} from "react";
import RecipeListData from "../../assets/data/food.json"

const Filter = ({ filterItem, setItem, menuItems }) => {
    return (
        <>
            <div className="d-flex justify-content-start">
                <button
                    className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
                    onClick={() => setItem(RecipeListData)}
                >
                    All
                </button>
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
            </div>
                </>
    );
};

export default Filter;