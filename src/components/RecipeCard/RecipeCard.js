import React from "react";
import RecipeType from "../RecipeType/RecipeType";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import style from "./RecipeCard.module.css"
import {recipeDefaultImage} from "../../utility/utility";
import {NavLink} from "react-router-dom";

function RecipeCard(props) {
    const {name, number, image} = props;
    const types = 0;

    return(
        <NavLink to={`/recipes/${number}`}>
            <Card className={style.card}>
                <CardImg onError={(event) => recipeDefaultImage(event)} loading="lazy" className={style.image} top
                         width="100%" src={image} alt={name}/>
                <CardBody className="text-center">
                    <CardTitle tag="h5" className={`h3 ${style.title}`}>{name}</CardTitle>
                    <CardText>
                        #{number}
                    </CardText>
                    <div className={style.types}>
                        <RecipeType id={number}/>
                    </div>
                </CardBody>
            </Card>
        </NavLink>
    );
}

export default RecipeCard;