import "./MiroNav.css"
import globe from "../../../img/sections/hero/globe.svg"
import arrow from "../../../img/sections/hero/arrow.svg"
import react from "../../../img/sections/hero/file-react.svg"
import MiroNavMenu from "./MiroNavMenu/MiroNavMenu"
import React from "react"

const MiroNav = () => {
    const [isOpen, setOpen] = React.useState(false)
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
                        <img src={react} alt="" />
                        <ul>
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
                    <div>

                        <a className="globe-EN"><img src={globe} alt="" />
                            <div> EN</div></a>
                        <a>Contact Sales</a>
                        <a href="">Login</a>
                        <a href="" className="signUp">Sign up free <span>&rarr;</span></a>
                    </div>
                </nav>
            </div>
            <section className="miro-section">

            </section>
        </div>
    )
}

export default MiroNav;