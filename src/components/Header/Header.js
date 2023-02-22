import React, {useState} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterLink} from "react-router-dom";
import style from "./Header.module.css"


const Header = (props) => {
    const {logo, navItems} = props;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const itemList = navItems.map((item) => {
        return(
            <NavItem key={item.url} className={style.navItem}>
                <NavLink exact={item.exact}
                            tag={RouterLink}
                            activeclassname={style.active}
                            to={item.url}
                            className="nav-link">
                    {item.text}
                </NavLink>
            </NavItem>
        );
    });

    return(
        <div className={style.navBar}>
            <Navbar expand="md" light className="pb-0">
                <div className="container d-flex flex-row">

                    <RouterLink to="/">
                        <img className={style.logo} src={logo} alt=""/>
                    </RouterLink>

                    <NavbarToggler onClick={toggle}/>

                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {itemList}
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;