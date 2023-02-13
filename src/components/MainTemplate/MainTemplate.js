import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header"

function MainTemplate(props) {
    const {footerCourseName, footerCourseLink, children, navItems, logo} = props;
    return(
        <>
            <Header logo={logo} navItems={navItems}/>
            <div className="my-5">{children}</div>
            <Footer courseName={footerCourseName} courseLink={footerCourseLink}/>
        </>
    );
}

export default MainTemplate;