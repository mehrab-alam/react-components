
import "./KongNav.css"
import KongNavMenu from "./KongNavMenu/KongNavMenu";

import React from "react";



const KongNav = () => {
    const [isOpen, setOpen] = React.useState(false)
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
        </div>
    )
}
export default KongNav;