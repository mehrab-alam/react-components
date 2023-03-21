import "./MiroNavMenu.css"


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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a>
                                    Miro Developer <br /> Platform
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a>
                                    Apps & <br /> Integrations
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a>
                                    Miro for Devices
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a>
                                    Templates
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.

                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a>
                                    Security
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="miroNavMenu-newOption">
                    <h2>What's new</h2>
                    <div className="miroNavMenu-newOption-content">
                        <img src="/img/sections/navigation/MiroNav/new-temp.png" alt="" />
                        <div>
                            <a>New templates</a>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="miroNavMenu-newOption-content">
                        <img src="/img/sections/navigation/MiroNav/slack.png" alt="" />
                        <div>
                            <a>Sign in with Slack</a>
                            <p>
                                Lorem ipsum dolor sit amet consectetur  adipisicing elit.
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