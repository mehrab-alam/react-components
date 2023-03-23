import React from "react";
import "./MetalNav.css"

const ProductMenu = () => (

    <nav className="product-menu-list">
        <ul>
            <li className="product-menu-li">
                <div>
                    <div className="product-menu-items">
                        <div >
                            <img src='/img/sections/hero/HeadStream/alloyLogos.png' alt='' height={30} />
                        </div>
                        <div>
                            Automation-for brands
                        </div>
                    </div>
                    <div>
                        <p>A control panel connect your apps and <br />automate tasks.</p>
                        <hr />
                    </div>
                    <div className="product-items">
                        <a href=""><span>Ecommerce & Product</span></a>
                        <a href=""><span>Marketing</span></a>
                        <a href=""><span>Logistics & Support</span></a>
                        <a href=""><span>Data & Analytics</span></a>
                        <a href=""><span>Pricing</span></a>
                    </div></div>
                <div>
                    <div className="product-menu-items">
                        <div >
                            <img src='/img/sections/hero/HeadStream/alloyLogos.png' alt='' height={30} />
                        </div>
                        <div>
                            Forge-for SaaS companies
                        </div>
                    </div>
                    <div>
                        <p>The fastest way to add ecommerce data and<br />integrations to your platform.</p>
                        <hr />
                    </div>
                    <div className="product-items">
                        <a href=""><span>Marketing</span></a>
                        <a href=""><span>Fintech</span></a>
                        <a href=""><span>Logistics & Support</span></a>
                        <a href=""><span>For all SaaS</span></a>
                        <a href=""><span>Book Demo</span></a>
                    </div></div>
            </li>
        </ul>
    </nav>
);

const MetalNav = () => {

    const [isOpen, setOpen] = React.useState(false)

    return (

        <nav className="metal-nav">
            <div>
                <img id="alloy-logo" src='/img/sections/hero/HeadStream/alloyLogos.png' alt='' height={30} />
                <a className="alloy-title" href="">Alloy</a>
                <a className="menu" href="">
                    <div style={{ display: "inline-block" }} onClick={(e) => {
                        e.preventDefault();
                        setOpen(!isOpen)
                    }}
                    >
                        <span>Products</span>

                    </div>


                </a>
                <a href=""><span>Integrations</span></a>
                <a href=""><span>Recipes</span></a>
                <a href=""><span>Resources</span></a>

            </div>
            <div className="metal-right-nav">
                <a href=""><span>Book Demo</span></a>
                <a href=""><span>Login</span></a>
                <button>Try it free</button>
            </div>
            {isOpen && (<ProductMenu />)}
        </nav>

    );
};

export default MetalNav;