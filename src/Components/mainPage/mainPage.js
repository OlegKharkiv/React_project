import React from "react";
import AppInfo from "../app-info/app-info";
import ProductCard from "../product-card/product-card"
import AboutInfo from "../about-info/about-info";
import facebook from "../images_01/icons/social/01.svg";
import instagram from "../images_01/icons/social/02.svg";
import twitter from "../images_01/icons/social/03.svg";
import linkedin from "../images_01/icons/social/04.svg";

import '../mainPage/mainPage.modules.scss';

function MainPage() {
    return(
        <div className="app"> 
            <AppInfo/>
            <div className="page">
                <div> 
                    <AboutInfo/>
                </div>
                <div className="search-panel">
                    <ProductCard/>
                </div>
            </div>
            <footer className="footer">
                <div className="footer__container">
                    <a href="" className="footer__logo">The pure formula for nail technics masters</a>
                        <nav className="footer__menu menu-footer">
                            <ul className="menu-footer__list">
                                <li className="menu-footer__item">
                                    <a href="" clasName="menu-footer__link">Home</a>
                                </li>
                                <li className="menu-footer__item">
                                    <a href="" className="menu-footer__link">About</a>
                                </li>
                                <li className="menu-footer__item">
                                    <a href="" className="menu-footer__link">Service</a>
                                </li>
                                <li className="menu-footer__item">
                                    <a href="" className="menu-footer__link">Portfolio</a>
                                </li>
                                <li className="menu-footer__item">
                                    <a href="" className="menu-footer__link">Blog</a>
                                </li>
                                <li className="menu-footer__item">
                                    <a href="" className="menu-footer__link">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    <div className="footer__copy">Copyright © 2023 Kysil O. All Rights Reseved.</div>
                </div>
            </footer>
            <div className="social">
                <a href="" className="social__item"><img src={facebook} alt="The facebook icon"/></a>
                <a href="" className="social__item"><img src={instagram} alt="The instagram icon"/></a>
                <a href="" className="social__item"><img src={twitter} alt="The twitter icon"/></a>
                <a href="" className="social__item"><img src={linkedin} alt="The linkedin icon"/></a>
            </div>
        </div>
    )
}

export default MainPage;