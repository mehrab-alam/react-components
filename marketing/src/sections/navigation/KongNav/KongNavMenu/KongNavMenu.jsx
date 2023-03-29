import React from "react";
import { productMenuContent1, productMenuContent2, productMenuContent3 } from "./KongNav";
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
                            {productMenuContent1.map((c, i) => {
                                return (
                                    <>
                                        <div key={i} className="menu-description">
                                            <a href="">{c.title}</a>
                                            <p>{c.description}</p>
                                            <a href="">{c.link}<span>&nbsp;&rarr;</span></a>
                                        </div>
                                    </>
                                )
                            })}
                        </li>

                    </ul>
                </li>
                <li>
                    <ul className="product-menu-item-1">
                        <li>
                            {productMenuContent2.map((c, i) => {
                                return (
                                    <>
                                        <div key={i} className="menu-description kong-insomnia-mesh">
                                            <a href="">{c.title} </a>
                                            <p>{c.description}</p>
                                            <ul>
                                                <li>{c.l1}</li>
                                                <div className="pipe">|</div>
                                                <li>{c.l2}</li>
                                                <div className="pipe">|</div>
                                                <li>{c.l3} </li>
                                                <div className="pipe">|</div>
                                                <li>{c.l4} </li>
                                            </ul>
                                        </div >
                                    </>
                                )
                            })}
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className="product-menu-item-1">
                        <li>
                            {productMenuContent3.map((c, i) => {
                                return (
                                    <>
                                        <div key={i} className="menu-description kong-insomnia-mesh">
                                            <a href="">{c.title} </a>
                                            <p>{c.description}</p>
                                            <ul>
                                                <li>{c.l1}</li>
                                                <div className="pipe">|</div>
                                                <li>{c.l2} </li>
                                                <div className="pipe">|</div>
                                                <li>{c.l3} </li>
                                            </ul>
                                        </div>
                                    </>
                                )
                            })}
                        </li>
                    </ul>
                </li>
            </div>
        </ul>
    )
}
export default KongNavMenu;