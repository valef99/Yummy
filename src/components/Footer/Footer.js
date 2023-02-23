import React from "react";
import style from "./Footer.module.css";
import university from "../../assets/images/university.png";
import elearning from "../../assets/images/elearning.png";
import {NavLink} from "react-router-dom";

function Footer(props) {
    const {courseName, courseLink} = props;

    return (
        <footer className={style.footer}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center pb-3">Yummy!</h1>
                    </div>
                </div>

                <div className={`row d-flex justify-content-center me-5 ms-5 pb-3 ${style.copyright}`}>
                    <div className={`col-md-auto`}>
                        <div className={`d-flex`}>
                            <div id={style.unimib} className={style.logo}>
                                <a href="https://www.unimib.it/" target="_blank">
                                    <img src={university} alt="unimib"/>
                                </a>
                            </div>
                            <div id={style.disco} className={style.logo}>
                                <a href={courseLink} target="_blank" target="_blank">
                                    <img src={elearning} alt="disco"/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="row d-flex justify-content-center">
                    <p className="text-center mt-4">
                        Copyright © 2023 Yummy! <br/>All right reserved by Valeria Froio and Sofia Damaso
                    </p>
                </div>

            </div>
        </footer>
    )

}

export default Footer;