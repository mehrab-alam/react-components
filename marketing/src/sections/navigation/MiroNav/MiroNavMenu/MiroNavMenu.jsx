import "./MiroNavMenu.css"
import navLinksItems from "../MiroNavItems"




const MiroNavMenu = ({ isOpen }) => {

    return (
        <div className={`miro-nav-menu ${isOpen ? "miroNav-open" : "miroNav-close"}`}>
            <div className="miroNavMenu-container">
                <div >
                    <h2 className="phroduct-header">Product</h2>
                    <div className="miroNavMenu-productOption">
                        {navLinksItems.map((t, i) => {
                            return (
                                <>
                                    <div key={i}>
                                        <a>{t.sublink}</a>
                                        <p>{t.description}</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                </div>
                <div className="miroNnav-menu-new-option">
                    <h2>What's new</h2>
                    <div className="miroNnav-menu-new-option-content">
                        <img src="" alt="" />
                        <div>
                            <a>New templates</a>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="miroNnav-menu-new-option-content">
                        <img src="" alt="" />
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