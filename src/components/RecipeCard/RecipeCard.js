import React from "react";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";
import style from "./RecipeCard.module.css"
import {recipeDefaultImage, checkNumber} from "../../utility/utility";
import {NavLink} from "react-router-dom";

function RecipeCard(props) {
    const {name, number, image} = props;
    const types = 0;

    return(
                <Card className={style.card}>
                    <div className={`d-grid align-items-start ${style.cardGrid}`}>
                        <NavLink className={style.link} to={`/recipes/${number}`}>
                        <CardImg onError={(event) => recipeDefaultImage(event)} loading="lazy" className={style.image} top
                                 width="100%" src={image} alt={name}/>
                        </NavLink>
                        <p className={`p-1 small  ${style.number}`}>#{number}</p>
                    </div>

                    <CardBody className="d-flex flex-row justify-content-between">
                        <CardTitle tag="h5">{name}</CardTitle>
                    </CardBody>
                </Card>
    );
}

export default RecipeCard;