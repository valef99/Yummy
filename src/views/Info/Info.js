import React from "react";
import ValeriaImg from "../../assets/images/valeria.jpeg"
import SofiaImg from "../../assets/images/sofia.jpg"
import style from "../../components/RecipeCard/RecipeCard.module.css";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";


function Info() {
    return(
        <div className="container">
            <div className="row">
                <div className="col mb-5">
                    <h2>Il progetto Yummy</h2>
                    <p>
                        Questo progetto nasce per il corso di Applicazioni Web e il suo obiettivo è quello di fornire una
                        piattaforma in cui si possono reperire alcune ricette di piatti particolari, inoltre per ogni pietanza
                        è possibile accedere ad alcuni dettagli significativi, come la tipologia di dieta, la tipogia di
                        piatto e quanto esso è salutare in una scala da 0 a 100. <br/>
                        Tutte le informazioni sono reperite tramite chiamata alla
                        <strong><a href="https://spoonacular.com/food-api"> API Spoonacular</a></strong> e tramite un
                        file JSON, anch'esso ottenuto tramite chiamata alla API.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Chi siamo?</h2>
                </div>
            </div>
            <div className="row mb-5 pb-5">
                <div className="col-5">
                    <Card>
                        <CardImg width="100%" src={ValeriaImg} alt="valeria"/>
                        <CardBody>
                            <CardTitle tag="h5" className={`h4 ${style.title}`}>Valeria Froio</CardTitle>
                            <p>
                                Ciao sono vale e questa è la mia descrizione
                            </p>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-5 offset-2">
                    <Card>
                        <CardImg width="100%" src={SofiaImg} alt="sofia"/>
                        <CardBody>
                            <CardTitle tag="h5" className={`h4 ${style.title}`}>Sofia Damaso</CardTitle>
                            <p>
                                Ciao sono sofi e questa è la mia descrizione
                            </p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Info;