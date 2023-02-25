import React from "react";
import style from "./Footer.module.css";
import unimib from  "../../assets/images/unimib.jpg"
import elearning from "../../assets/images/elearning-unimib.png";
import {NavLink} from "react-router-dom";

function Footer(props) {
    const {courseLink, navItems} = props;

    const itemList = navItems.map((item) => {
        return (
            <div key={item.url} className="nav-item me-4">
                <NavLink exact={item.exact}
                         activeClassName={style.active}
                         to={item.url}>
                    {item.text}
                </NavLink>
            </div>
        )
    });

    return (
        <footer className={style.footer}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center pb-3 pt-3">Yummy!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex flex-row justify-content-center ps-5 pe-5 mb-5">
                        {itemList}
                    </div>
                </div>

                <div className={`row d-flex justify-content-center me-5 ms-5 pb-3 ${style.copyright}`}>
                    <div className={`col-md-auto`}>
                        <div className={`d-flex`}>
                            <div className={style.logo}>
                                <a href="https://www.unimib.it/" target="_blank">
                                    <img src={unimib} alt="unimib"/>
                                </a>
                            </div>
                            <div className={style.logo}>
                                <a href={courseLink} target="_blank">
                                    <img src={elearning} alt="elearning"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <p className="text-center mt-4">
                        Copyright © 2023 Yummy! All right reserved <br/>Valeria Froio and Sofia Damaso
                    </p>
                </div>

            </div>
        </footer>
    )

}

export default Footer;