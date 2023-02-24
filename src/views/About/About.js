import React from "react";
import ValeriaImg from "../../assets/images/valeria.jpeg";
import SofiaImg from "../../assets/images/sofia.jpg";
import Fifty from "../../assets/images/50s.png";
import Gaming from "../../assets/images/game.png";
import Photography from "../../assets/images/photography.png";
import Saddle from "../../assets/images/saddle.png";
import CS from "../../assets/images/programming.png";
import {Card, CardBody, CardImg, CardTitle, UncontrolledTooltip} from "reactstrap";
import Github from "../../assets/images/github_icon.png";
import Linkedin from "../../assets/images/linkedin_icon.png";
import style from "./About.module.css";
import RecipeListData from "../../assets/data/food.json";


function About() {
    return(
        <div className="container">
            <div className="row">
                <div className={`col mb-5 p-3 rounded-3 ${style.background}`} >
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
            <div className="row mt-5">
                <div className="col">
                    <h2>Chi siamo?</h2>
                </div>
            </div>
            <div className="row mb-5 pb-5">
                <div className="col-5">
                    <Card>
                        <CardImg width="100%" src={ValeriaImg} alt="valeria"/>
                        <CardBody>
                            <CardTitle tag="h3" className={`h3 ${style.title}`}>Valeria Froio</CardTitle>
                            <p>
                                Ciao sono vale e questa è la mia frase
                            </p>
                            <div className="row mt-3">
                                <div className="col d-flex flex-row align-items-center">
                                    <h5 className="me-3">Degree</h5>
                                    <img src={CS} className={style.icons} id="cs"/>
                                    <UncontrolledTooltip placement="right" target="cs">
                                        Computer Science
                                    </UncontrolledTooltip>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col d-flex flex-row align-items-center">
                                    <h5 className="me-3">Hobbies</h5>
                                    <img src={Fifty} className={style.icons} id="fifty"/>
                                    <UncontrolledTooltip placement="bottom" target="fifty">
                                        50's
                                    </UncontrolledTooltip>
                                    <img src={Gaming} className={style.icons} id="gaming"/>
                                    <UncontrolledTooltip placement="bottom" target="gaming">
                                        Gaming
                                    </UncontrolledTooltip>
                                </div>
                            </div>

                            <div className={`row mt-4 pt-4 ${style.contact}`}>
                                <div className="col">
                                    <h5>Contact me</h5>
                                    <div className="d-flex flex-row align-content-center">
                                        <a href="https://github.com/valef99" className="d-flex flex-row align-items-center">
                                            <img src={Github} className={style.icons}/>
                                            <p className={style.username}>valef99</p>
                                        </a>
                                        <a href="https://www.linkedin.com/in/valeria-froio/" className="d-flex flex-row align-items-center ms-5">
                                            <img src={Linkedin} className={style.icons}/>
                                            <p className={style.username}>Valeria Froio</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-5 offset-2">
                    <Card>
                        <CardImg width="100%" src={SofiaImg} alt="sofia"/>
                        <CardBody>
                            <CardTitle tag="h3" className={`h3 ${style.title}`}>Sofia Damaso</CardTitle>
                            <p>
                                Ciao sono sofi e questa è la mia frase
                            </p>
                            <div className="row mt-3">
                                <div className="col d-flex flex-row align-items-center">
                                    <h5 className="me-3">Degree</h5>
                                    <img src={CS} className={style.icons} id="cs"/>
                                    <UncontrolledTooltip placement="right" target="cs">
                                        Computer Science
                                    </UncontrolledTooltip>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col d-flex flex-row align-items-center">
                                    <h5 className="me-3">Hobbies</h5>
                                    <img src={Photography} className={style.icons} id="photography"/>
                                    <UncontrolledTooltip placement="bottom" target="photography">
                                        Photography
                                    </UncontrolledTooltip>
                                    <img src={Saddle} className={style.icons} id="saddle"/>
                                    <UncontrolledTooltip placement="bottom" target="saddle">
                                        Horse Riding
                                    </UncontrolledTooltip>
                                </div>
                            </div>

                            <div className={`row mt-4 pt-4 ${style.contact}`}>
                                <div className="col">
                                    <h5>Contact me</h5>
                                    <div className="d-flex flex-row align-content-center">
                                        <a href="https://github.com/sofidamaso" className="d-flex flex-row align-items-center">
                                            <img src={Github} className={style.icons}/>
                                            <p className={style.username}>sofidamaso</p>
                                        </a>
                                        <a href="https://www.linkedin.com/in/sofia-damaso-5794a2251/" className="d-flex flex-row align-items-center ms-5">
                                            <img src={Linkedin} className={style.icons}/>
                                            <p className={style.username}>Sofia Damaso</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex flex-column align-items-center">
                    <p>Se vuoi saperne di più leggi la documentazione:</p>
                    <a className="btn buttons mt-3 px-4" href="https://docs.google.com/document/d/1QspeVv1lZRMoEAl3l0GxeAxbcsj-COsoRDtLQLe77mA/edit?usp=sharing">
                        Doc
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;