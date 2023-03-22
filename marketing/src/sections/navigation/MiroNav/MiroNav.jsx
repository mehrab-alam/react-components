import "./MiroNav.css"
import globe from "../../../img/sections/hero/globe.svg"
import arrow from "../../../img/sections/hero/arrow.svg"
import react from "../../../img/sections/hero/file-react.svg"
import MiroNavMenu from "./MiroNavMenu/MiroNavMenu"
import React from "react"
import "./MiroNavResponsive.css"

const MiroNav = () => {
    const [isOpen, setOpen] = React.useState(false)
    const [isHamburger, setHamburger] = React.useState(false)
    function backGround() {
        if (isOpen) {
            document.body.className = "dull-bg"
        } else {
            document.body.className = "bright-bg"

        }
    }
    return (
        <div className={backGround()}>
            <div className="container">
                <nav className="miroNav-container">
                    <div className="miroNav-menu">
                        <div>
                            <img src={react} alt="" />
                            <ul className="miro-nav-links">
                                <li className="miroNav-menu-option" onClick={(e) => {
                                    setOpen(!isOpen)
                                }}><span className={`miroNav-product-menu ${isOpen ? "product-open" : "product-close"}`}>
                                        <a>Product</a>
                                        <img className={isOpen ? "open" : "close"} src={arrow} alt="" />
                                    </span>
                                    <MiroNavMenu isOpen={isOpen} />
                                </li>
                                <li>
                                    <a href="">Solution</a>
                                </li>
                                <li><a href="">Resources</a></li>
                                <li><a href="">Enterprise</a></li>
                                <li><a href="">Pricing</a></li>
                            </ul>
                        </div>
                        <div className={isOpen ? "miroNav-underline-border-open" : "miroNav-underline-border-close"}></div>
                    </div>
                    <div className="action-links">
                        <a className="globe-EN"><img src={globe} alt="" />
                            <div> EN</div></a>
                        <a>Contact Sales</a>
                        <a href="">Login</a>
                        <a href="" className="signUp">Sign up free <span>&rarr;</span></a>
                    </div>
                    <div className={`hamburger ${isHamburger ? "isHamburger-open" : "isHamburger-close"}`} onClick={() => { setHamburger(!isHamburger) }}>
                        <div className="slice slice-1"></div>
                        <div className="slice slice-2"></div>
                        <div className="slice slice-3"></div>
                    </div>
                </nav>

            </div >
            <div className={`mobile-nav-links ${isHamburger ? "nav-links-open" : "nav-links-close"}`}>
                <a href="">Home</a>
                <a href="">Resources</a>
                <a href="">Enterprises</a>
                <a href="">pricing</a>
            </div>
            <section className="miro-section">

            </section>
        </div >
    )
}

export default MiroNav;