import React, {useState} from "react";
import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import {NavLink as RouterLink} from "react-router-dom";
import style from "./Header.module.css"
import user from "../../assets/images/user.png"

const Header = (props) => {
    const {logo, navItems} = props;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const itemList = navItems.map((item) => {
        return(
            <NavItem key={item.url} className={style.navItem}>
                <RouterLink exact={item.exact}
                            activeclassname={style.active}
                            to={item.url}
                            className="nav-link">
                    {item.text}
                </RouterLink>
            </NavItem>
        );
    });

    return(
        <div className={style.navBar}>
            <Navbar expand="md" light>
                <div className="container d-flex flex-row">

                    <RouterLink to="/">
                        <img className={style.logo} src={logo} alt=""/>
                    </RouterLink>

                    <NavbarToggler onClick={toggle}/>

                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto d-flex w-100" navbar>
                            {itemList}
                            <NavItem key={"/profile"} className={style.userIcon}>
                                <RouterLink exact={true}
                                            activeclassname={style.active}
                                            to={"/profile"}
                                            className="nav-link">
                                    <img src={user} alt=""/>
                                </RouterLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;