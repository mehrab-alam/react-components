import React from "react";
import "./KongNavMenu.css"
const KongNavMenu = ({ isProductActive, setProductActive }) => {

    return (
        <ul className={`kong-menu-container ${isProductActive ? "sub-nav-open" : "sub-nav-close"}`}>

            <div className="products-menu-option">
                <div className={`sub-nav-prod-header  `} onClick={() => {
                    setProductActive(!isProductActive)

                }}>
                    <img src="img/sections/navigation/KongNav/down-arrow.svg" alt="" />
                    <div>Products</div>
                </div>
                <li className="products-menu-option-1">

                    <ul className="product-menu-item-1">

                        <li >
                            <div className="menu-description">
                                <a href="">Why Kong?</a>
                                <p>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing</p>
                                <a href="">Learn more <span>&nbsp;&rarr;</span></a>
                            </div>
                        </li>
                        <li>
                            <div className="menu-description">
                                <a href="">Products Updates</a>
                                <p>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing</p>
                                <a href="">Learn more <span>&nbsp;&rarr;</span></a>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            <div className="menu-description">
                                <a href="">King Konnect</a>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
                                <ul>
                                    <li>Overview</li>
                                    <div className="pipe">|</div>
                                    <li>Docs</li>
                                    <div className="pipe">|</div>
                                    <li>Plugin Hub</li>
                                    <div className="pipe">|</div>
                                    <li>Pricing</li>
                                </ul>
                            </div >
                        </li>
                        <li>
                            <div className="menu-description kong-insomnia-mesh">
                                <a href="">Kong Mesh</a>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
                                <ul>
                                    <li>Overview</li>
                                    <div className="pipe">|</div>
                                    <li>Docs</li>
                                    <div className="pipe" >|</div>
                                    <li>Zero Trust Security</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            <div className="menu-description">
                                <a href="">Kong Enterprise</a>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
                                <ul>
                                    <li>Overview</li>
                                    <div className="pipe">|</div>
                                    <li>Docs</li>
                                    <div className="pipe">|</div>
                                    <li>Plugin Hub</li>
                                </ul>
                            </div>
                            <div className="menu-description kong-insomnia-mesh">
                                <a href="">Kong Insomnia</a>
                                <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing
                                </p>
                                <ul className="kong-insomania">
                                    <li>Overview
                                    </li>
                                    <div className="pipe">|</div>
                                    <li>Docs
                                    </li>
                                    <div className="pipe">|</div>
                                    <li>Plugin
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
            </div>
        </ul>
    )
}
export default KongNavMenu;