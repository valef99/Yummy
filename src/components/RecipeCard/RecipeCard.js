import React from "react";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";
import style from "./RecipeCard.module.css"
import {recipeDefaultImage, checkNumber} from "../../utility/utility";
import {NavLink} from "react-router-dom";
import Default from "../../views/Default/Default";
import recipeListData from "../../assets/data/food.json";

function RecipeCard(props) {
    const {name, number, image} = props;
    const types = 0;

    return(
            <NavLink className={style.link} to={`/recipes/${number}`}>
                <Card className={style.card}>
                    <CardImg onError={(event) => recipeDefaultImage(event)} loading="lazy" className={style.image} top
                             width="100%" src={image} alt={name}/>
                    <CardBody className="d-flex flex-row justify-content-between">
                        <CardTitle tag="h4">{name}</CardTitle>
                        <p className="align-self-end">#{number}</p>
                    </CardBody>
                </Card>
            </NavLink>
    );
}

export default RecipeCard;