
import "./KongNav.css"
import KongNavMenu from "./KongNavMenu/KongNavMenu";
import "./KongNavResponsive.css"
import React from "react";



const KongNav = () => {
    const [isOpen, setOpen] = React.useState(false)
    const [isHamburger, setHamburger] = React.useState(false)
    const [isSubProduct, setSubProduct] = React.useState(false)
    const [isProductActive, setProductActive] = React.useState(false)



    function bodyClassName() {
        if (isOpen) {
            document.body.className = "kong-dullBackground"
        } else {
            document.body.className = "kong-brightBackground"
        }
    }

    return (
        <div className={bodyClassName()}>
            <div className="kongnav-container">
                <nav className="kongnav">
                    <div >
                        <a href="" className="kong-logo"><img src="/img/sections/navigation/KongNav/kong-logo.svg" alt="" /></a>
                        <ul className="kongnav-menu">
                            <li>
                                <div onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(!isOpen)
                                }}>
                                    <a> <div className="product-menu">
                                        Products</div> <img className={isOpen ? "open" : "close"} src="/img/sections/navigation/KongNav/down-arrow.svg" alt="" /></a>
                                    {isOpen && (<KongNavMenu />)}
                                </div>
                            </li>
                            <li className="kongnav-menu-2">Solution</li>
                            <li className="kongnav-menu-2">Customers</li>
                            <li className="kongnav-menu-2">Resources</li>
                            <li className="kongnav-menu-2">Company</li>
                        </ul>
                    </div>
                    <div className="kongnav-link">
                        <a href="">Login</a>
                        <button className="demoBtn">Get a Demo</button>
                        <button className="startBtn">Start for Free</button>
                    </div>
                </nav>
                <hr />
            </div>
            <nav className="responsive-kong-nav">
                <img src="img/sections/navigation/KongNav/kong-logo.svg" alt="" />
                <div className={`hamburger ${isHamburger ? "hamburger-open" : "hamburger-close"}`} onClick={() => {
                    if (isHamburger) {
                        setProductActive(true)
                    }
                    setHamburger(!isHamburger)
                }}>
                    <div className="slice slice-1"></div>
                    <div className="slice slice-2"></div>
                    <div className="slice slice-3"></div>
                </div>
            </nav>
            <ul className={`responsive-ul-links ${isHamburger ? "respo-ul-open" : "respo-ul-close"}`}>
                <li className="kong-sub-link-list sub-list-1" onClick={() => {
                    if (isSubProduct) {
                        setProductActive(!isProductActive)
                    }
                    setSubProduct(!isSubProduct)
                }}>
                    <div>
                        Products</div>
                    <img src="img/sections/navigation/KongNav/down-arrow.svg" alt="" />

                </li>

                <li className="kong-sub-link-list sub-list-2">Solution</li>
                <li className="kong-sub-link-list sub-list-3">Customers</li>
                <li className="kong-sub-link-list sub-list-4">Resources</li>
                <li className="kong-sub-link-list sub-list-5">Company</li>
                <hr />
                <div className={`kong-sub-action-btn ${isHamburger ? "respo-ul-open" : "respo-ul-close"}`}  >
                    <a href="">Login</a>
                    <button className="sub-demo-btn">Get a Demo</button>
                    <button className="sub-start-btn">Start for Free</button>
                </div>
                <div className={` ${isSubProduct ? "sub-nav-close" : "sub-nav-cont-close"}`}> <KongNavMenu isProductActive={isProductActive} setProductActive={setProductActive} />
                </div>

            </ul>

        </div>
    )
}
export default KongNav;