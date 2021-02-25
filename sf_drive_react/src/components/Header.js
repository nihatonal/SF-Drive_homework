import * as React from "react";

import "../styles/Header.css";
import Nav from "./Nav";
// import Faq from "./Faq";


function Header(props) {
    
    return (
         <header className = {"header content_wrapper"}>
            <div className = {"header__wrapper content-container"}>
                <div className = {"header__logo"}>
                    <p className = {"header__logo-name"}>SkillDrive</p>
                    <div className = {"header__logo-line first"}></div>
                    <div className = {"header__logo-line second"}></div>
                </div>
            
            <Nav/>

            <div className ={"header__btn"}>
                <button className ={"header__btn-signin"}>Войти</button>
            </div>

            <div className ={"header__menu-icon"}>
                <div className ={"header__menu-icon-item"}></div>
                <div className ={"header__menu-icon-item"}></div>
                <div className ={"header__menu-icon-item"}></div>
            </div>
            </div>
        </header>
        );
}
export default Header;