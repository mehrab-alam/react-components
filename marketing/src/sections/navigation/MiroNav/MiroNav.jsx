import "./MiroNav.css"

import MiroNavMenu from "./MiroNavMenu/MiroNavMenu"
import React from "react"
import "./MiroNavResponsive.css"
import { navLinksItems } from "./MiroNavItems"




const MiroNav = () => {
    const [isOpen, setOpen] = React.useState(false)
    const [isHamburger, setHamburger] = React.useState(false)
    const [subNavExpanded, setSubNavExpanded] = React.useState(false)

    function backGround() {
        if (isOpen) {
            document.body.className = "dull-bg"
        } else {
            document.body.className = "bright-bg"

        }
    }
    return (
        <div className={`miro-hero-container ${backGround()}`}>
            <div className="hero-nav">
                <nav className={`miro-nav-container ${isHamburger ? "miro-nav-open" : "miro-nav-close"}`}>
                    <div className="miroNav-menu">
                        <div>
                            <img src="img/sections/navigation/MiroNav/file-react.svg" alt="" />
                            <ul className="miro-nav-links">
                                <li className="miroNav-menu-option" onClick={(e) => {
                                    setOpen(!isOpen)
                                }}><span className={`miroNav-product-menu ${isOpen ? "product-open" : "product-close"}`}>
                                        <a>Product</a>
                                        <img className={isOpen ? "product-menu-open" : "product-menu-close"} src="img/sections/navigation/MiroNav/arrow.svg" alt="" />
                                    </span>
                                    <MiroNavMenu isOpen={isOpen} />
                                </li>
                                <li>
                                    <a className="nav-links" href="">Solution</a>
                                </li>
                                <li><a className="nav-links" href="">Resources</a></li>
                                <li><a className="nav-links" href="">Enterprise</a></li>
                                <li><a className="nav-links" href="">Pricing</a></li>
                            </ul>
                        </div>
                        <div className={isOpen ? "miroNav-underline-border-open" : "miroNav-underline-border-close"}></div>
                    </div>
                    <div className="action-links">
                        <a className="globe-EN"><img src="img/sections/navigation/MiroNav/globe.svg" alt="" />
                            <div> EN</div></a>
                        <a>Contact Sales</a>
                        <a href="">Login</a>
                        <a href="" className="signUp">Sign up free <span>&rarr;</span></a>

                    </div>

                    <div className={`hamburger ${isHamburger ? "isHamburger-open " : "isHamburger-close"} `} onClick={() => {
                        if (isHamburger) {
                            setSubNavExpanded(false)
                        }
                        setHamburger(!isHamburger)
                    }
                    }>
                        <button className="sub-action-btn">Sign up free <span>&rarr;</span></button>

                        <div>
                            <div className="slice slice-1"></div>
                            <div className="slice slice-2"></div>
                            <div className="slice slice-3"></div>
                        </div>
                    </div>
                </nav>

            </div >
            <div className={`mobile-nav-links ${isHamburger ? "nav-links-open" : "nav-links-close"}`}>
                <div href=""> <span className={`sub-nav-links ${subNavExpanded ? "trigger-open" : "trigger-close"} `} onClick={(e) => {
                    setSubNavExpanded(!subNavExpanded)
                }}>
                    <div className={` product-sub-nav ${subNavExpanded ? "sub-product-open" : "sub-product-close"}`}> Products</div>
                    <img className="product-child-nav-arrow" src="img/sections/navigation/MiroNav/arrow.svg" alt="" /></span>
                    <div className={`children-trigger ${subNavExpanded ? "children-trigger-open" : "children-trigger-close"} `}>
                        <h4>Product</h4>
                        {navLinksItems.map((t, i) => {
                            return (

                                <a className="children-trigger-links" href="" key={i}>
                                    <div >{t.sublink}</div>
                                    <div>{t.description}</div>
                                </a>

                            )
                        })}
                    </div>
                </div>
                <a href="" className={`sub-nav-links `}>Resources

                </a>
                <a href="" className={`sub-nav-links `}>Enterprises

                </a>
                <a href="" className={`sub-nav-links `}>Solutions

                </a>
                <a href="" className={`sub-nav-pricing sub-nav-links`}>pricing

                </a>
                <div className="sub-action-link">
                    <button className="sub-action-btn">Sign up free <span>&rarr;</span></button>
                    <div>
                        <a href="">Login</a>
                        <a href="">Contact Sales</a>
                        <a className="sub-globe-EN"><img src="img/sections/navigation/MiroNav/globe.svg" alt="" />
                            <div> EN</div></a>
                    </div>
                </div>
            </div>
            <section className="miro-section">

            </section>
        </div >
    )
}

export default MiroNav;