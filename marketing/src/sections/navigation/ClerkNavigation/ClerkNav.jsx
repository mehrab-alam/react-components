import "./ClerkNav.css";
import React from 'react';
import './ClerkNavResponsive.css'
import { webProductMenu, productMenu, webSecondProductMenu, componetsItem, databaseItem, traditionalItem } from "./ProductsMenu";


const Clerk = () => {
    const [isHamburger, setHamburger] = React.useState(false)
    const [isArrowOpen, setArrowOpen] = React.useState(false)
    const [isProductList, setProductList] = React.useState(false)
    return (
        <>
            <nav className="clerk-navigation">
                <div className="clerk-logo">
                    <div>
                        <img src='./img/sections/navigations/ClerkNavigation/logo.svg' />
                        <h1>Clerk</h1>
                    </div>
                    <div className={`nav-a-tag ${isHamburger ? "open-web-menu" : "close-web-menu"}`}>
                        <div>
                            <span>
                                <p className="web-product-item" onClick={() => {
                                    setProductList(!isProductList)
                                }}>Product</p>
                            </span>
                            <div className={`all-products-items ${isProductList ? "open-web-list" : "close-web-list"}`}>
                                <div className="items-menu-product">
                                    <div className="product-list-menu">
                                        <span>Products</span>
                                        <p>FEATURES</p>
                                        {webProductMenu.map((t, i) => {
                                            return (
                                                <div key={i} className="web-mob-list" >
                                                    <div>
                                                        <img src={t.img} alt="" />
                                                        <h1>{t.title}</h1>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <p>COMPONENTS</p>
                                        {componetsItem.map((t, i) => {
                                            return (
                                                <div key={i} className="web-second-list">
                                                    <div className="componets-items">
                                                        <img src={t.img} />
                                                        <h1>{t.title}</h1>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="jamstack-framework">
                                        <span>JAMSTACK FRAMEWORK INTEGRATIONS</span>
                                        {webSecondProductMenu.map((t, i) => {
                                            return (
                                                <div key={i} className="web-second-list">
                                                    <div>
                                                        <img src={t.img} />
                                                        <h1>{t.title}</h1>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="jamstack-framework-item">
                                            <div className="database-heading">JAMSTACK DATABASE INTEGRATIONS</div>
                                            {databaseItem.map((t, i) => {
                                                return (
                                                    <div key={i} className="web-second-list">
                                                        <div>
                                                            <img src={t.img} />
                                                            <h1>{t.title}</h1>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="jamstack-framework-item">
                                            <div className="database-heading">TRADITIONAL FRAMEWORK INTEGRATIONS</div>
                                            {traditionalItem.map((t, i) => {
                                                return (
                                                    <div key={i} className="web-second-list">
                                                        <div>
                                                            <img src={t.img} />
                                                            <h1>{t.title}</h1>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <a href="" >Developers</a>
                        <a href="" >Company</a>
                        <a href="" >For startups</a>
                        <a href="" >Pricing</a>
                    </div>
                    <div className="nav-button">
                        <button className="sign-in">Book a demo</button>
                        <button className="sign-up">Sign up</button>
                    </div>
                </div >
                <div className={`hamburger ${isHamburger ? "open-hamburger" : "close-hamburger"}`}
                    onClick={() => setHamburger(!isHamburger)}>
                    <div className="slice slice-1"></div>
                    <div className="slice slice-2"></div>
                    <div className="slice slice-3"></div>
                </div>
            </nav >
            <div className={`mobile-nav-list ${isHamburger ? "open-sub-menu" : "close-sub-menu"}`}>
                <div>
                    <hr className="mob-hr" />
                    <span className="product-main-item" onClick={() => {
                        setProductList(!isProductList)
                    }}>
                        <p>Product</p>
                        <img onClick={() => {
                            setArrowOpen(!isArrowOpen)
                        }} className={`arrow-rotate ${isArrowOpen ? "open-arrow" : "close-arrow"}`} src="./img/sections/navigations/ClerkNavigation/right.svg" alt="" />
                    </span>
                    <span className="mob-feature-heading">FEATURES</span>
                    {productMenu.map((t, i) => {
                        return (
                            <>
                                <div key={i} className={`sub-mob-list ${isProductList ? "open-sub-list" : "close-sub-list"}`}>
                                    <div>
                                        <img src={t.img} alt="" />
                                        <h1>{t.title}</h1>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <a href="" >Developers</a>
                <a href="" >Company</a>
                <a href="" >For startups</a>
                <a href="" >Pricing</a>
            </div>
        </>
    )
}

export default Clerk;
