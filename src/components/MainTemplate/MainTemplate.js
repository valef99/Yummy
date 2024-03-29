import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import style from "./MainTemplate.module.css"

function MainTemplate(props) {
    const {footerCourseLink, children, navItems, logo} = props;

    return(
        <div className={`position-relative min-vh-100 ${style.backgroundContainer}`}>
            <Header logo={logo} navItems={navItems}/>
            <div className={`py-5 ${style.children}`}>{children}</div>
            <Footer courseLink={footerCourseLink} navItems={navItems}/>
        </div>
    );
}

export default MainTemplate;