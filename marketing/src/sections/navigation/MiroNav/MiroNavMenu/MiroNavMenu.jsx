import "./MiroNavMenu.css"
import tempImg from "../../../../img/sections/hero/new-temp.png"
import slackImg from "../../../../img/sections/hero/slack.png"

const MiroNavMenu = ({ isOpen }) => {

    return (
        <div className={`miroNavMenu ${isOpen ? "miroNav-open" : "miroNav-close"}`}>
            <div className="miroNavMenu-container">
                <div className="">
                    <h2 className="phroduct-header">Product</h2>
                    <div className="miroNavMenu-productOption">
                        <div>
                            <div>
                                <a>WhiteBoard</a>
                                <p>
                                    Collaborate to create <br /> the next big thing
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a>
                                    Miro Developer <br /> Platform
                                </a>
                                <p>
                                    Build with our API, SDK,<br /> and iFrame
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a>
                                    Apps & <br /> Integrations
                                </a>
                                <p>
                                    Work smarter with <br /> connected tools
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a>
                                    Miro for Devices
                                </a>
                                <p>
                                    Collaborate with your <br /> team from anywhere
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a>
                                    Templates
                                </a>
                                <p>
                                    Save time with our <br /> ready-made <br /> frameworks and<br /> proven  workflows

                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a>
                                    Security
                                </a>
                                <p>
                                    Keep your work safe <br /> with enterprise-grade <br /> data protection
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="miroNavMenu-newOption">
                    <h2>What's new</h2>
                    <div className="miroNavMenu-newOption-content">
                        <img src={tempImg} alt="" />
                        <div>
                            <a>New templates</a>
                            <p>
                                800+ creators, 1000+ templates, find everything you need
                            </p>
                        </div>
                    </div>
                    <div className="miroNavMenu-newOption-content">
                        <img src={slackImg} alt="" />
                        <div>
                            <a>Sign in with Slack</a>
                            <p>
                                Connect to Miro by using your  <br /> Slack
                            </p>
                        </div>
                    </div>
                    <a className="see-change">See changelog </a><span className="right-arrow">&rarr;</span>
                </div>
            </div>
            <hr />
            <div className="contact-sales"> <a href="" >Contact Sales </a><span className="right-arrow">&rarr;</span></div>
        </div>

    )
}
export default MiroNavMenu;