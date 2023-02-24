import React from "react";
import style from "./Default.module.css";
import {recipeDefaultImage} from "../../utility/utility.js";
import ErrorImage from "../../assets/images/404error.png"
import {NavLink} from "react-router-dom";

function Default(){
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="my-5 text-center">
                        <img className={style.error} onError={(event) => recipeDefaultImage(event)}
                             src={ErrorImage} />
                        <p className={style.textBottom}>Whoops! the page you're looking for can't be found.</p>
                        <NavLink className="btn buttons mt-4 mb-5" to="/">Back Home</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Default;