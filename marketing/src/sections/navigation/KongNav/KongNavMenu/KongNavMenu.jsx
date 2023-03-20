
import "./KongNavMenu.css"
// import arrowDiagonal from "../../../../img/sections/KongNav/diagonal-arrow.svg"
const KongNavMenu = () => {
    return (
        <ul className="menu-container">
            <div className="products-menu-option">
                <li>
                    <ul>
                        <li>
                            <div className="menu-description">
                                <a href="">Why Kong?</a>
                                <p>See what makes Kong the fastest,<br />most adopted API gateway</p>
                                <a href="">Learn more <span>&nbsp;&rarr;</span></a>
                            </div>
                        </li>
                        <li>
                            <div className="menu-description">
                                <a href="">Products Updates</a>
                                <p>Check out the latest Kong feature <br /> release and updates</p>
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
                                <p>Single platform for SaaS end-to-end connectivity</p>
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
                                <p>Enterprise service mesh based on kuma and Envoy</p>
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
                                <p>See what makes the Kong fastest,most adopted API gateway</p>
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
                                <p>Collaborative API design platform
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