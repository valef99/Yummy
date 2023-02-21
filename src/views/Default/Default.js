import React from "react";
import style from "./Default.module.css";
import {recipeDefaultImage} from "../../utility/utility.js";
import ErrorImage from "../../assets/images/error.webp"

function Default(){
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="my-5 text-center">
                        <p className={style.text}>OOOOOPS!</p>
                        <img className={style.error} onError={(event) => recipeDefaultImage(event)}
                             src={ErrorImage} />
                        <p className={style.textBottom}>404 ERROR</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Default;