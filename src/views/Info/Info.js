import React from "react";
import ValeriaImg from "../../assets/images/valeria.png";
import SofiaImg from "../../assets/images/sofia.png";
import Fifty from "../../assets/images/50s.png";
import Gaming from "../../assets/images/game.png";
import Photography from "../../assets/images/photography.png";
import Saddle from "../../assets/images/saddle.png";
import CS from "../../assets/images/programming.png";
import {Card, CardBody, CardImg, CardTitle, UncontrolledTooltip} from "reactstrap";
import Github from "../../assets/images/github_icon.png";
import Linkedin from "../../assets/images/linkedin_icon.png";
import style from "./Info.module.css";
import RecipeListData from "../../assets/data/food.json";


function Info() {
    return(
        <div className="container">
            <div className="row">
                <div className={`col mb-5 p-5 rounded-3 ${style.background}`} >
                    <h2>Il progetto Yummy</h2>
                    <p className="mt-4">
                        Questo progetto nasce per il corso di <strong>Applicazioni Web</strong> e il suo obiettivo è quello di fornire un ricettario di piatti
                        particolari, originali e accessibili online. <br/>
                        Il sito offre una vasta selezione di ricette per soddisfare i gusti e le esigenze di tutti gli utenti.
                    </p>
                    <p className="mt-3">
                        Sei una persona attenta alla linea? Con <strong>Yummy!</strong> puoi conteggiare le calorie e ottenere l'health score della ricetta, per aiutarti a mangiare in modo sano ed equilibrato. <br/>
                        <strong>Yummy!</strong> si adatta alle esigenze di tutti, proponendo una vasta scelta di piatti vegani, vegetariani e gluten free. <br/>
                        In ogni ricetta puoi trovare, oltre alla lista degli ingredienti, un pratico tutorial passo-passo per la preparazione. <br/>
                        Tutte le informazioni sono reperite tramite chiamate all'<a href="https://spoonacular.com/food-api"><strong>API Spoonacular</strong></a>. <br/>
                        <strong>Yummy!</strong> è il tuo ricettario online completo e facile da utilizzare, che ti permetterà di scoprire nuovi sapori e di sperimentare in cucina, senza rinunciare alla salute e al benessere.
                    </p>
                </div>
            </div>
            <div className="row m-5">
                <div className="col">
                    <h2>Chi siamo?</h2>
                </div>
            </div>
            <div className="row mb-5 pb-5">
                <div className="col-md-5 mt-md-0 mt-3">
                    <Card className="align-items-center py-5">
                        <CardImg className={`mb-4 ${style.teamImg}`} src={ValeriaImg} alt="valeria"/>
                        <CardBody className="px-5">
                            <CardTitle tag="h3" className={`h3 ${style.title}`}>Valeria Froio</CardTitle>
                            <p className="mb-5">
                                “In fondo imparare a programmare in un linguaggio è come imparare una nuova lingua, solo che la controparte con cui si comunica è composta da parti elettroniche e non organi umani”.
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

                            <div className={`row w-100 mt-4 pt-4 ${style.contact}`}>
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
                <div className="col-md-5 offset-md-2 mt-md-0 mt-5">
                    <Card className="align-items-center py-5">
                        <CardImg className={`mb-4 ${style.teamImg}`} src={SofiaImg} alt="sofia"/>
                        <CardBody className="px-5">
                            <CardTitle tag="h3" className={`h3 ${style.title}`}>Sofia Damaso</CardTitle>
                            <p className="mb-5">
                                "Quando dici: "Ho scritto un programma che manda in crash Windows", la gente ti guarda stupita e ti dice: "Hey, ce l'ho nel sistema, *gratis*"."
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

                            <div className={`row mt-4 pt-4 w-100 ${style.contact}`}>
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

export default Info;