import "./MiroNavMenu.css"
import { navLinksItems, whatsNewItem } from "../MiroNavItems"




const MiroNavMenu = ({ isOpen }) => {

    return (
        <div className={`miro-nav-menu ${isOpen ? "miroNav-open" : "miroNav-close"}`}>
            <div className="miro-nav-container">
                <div className="product-description-list" >
                    <h2 className="product-header">Product</h2>
                    <div className="miro-nav-prod-opt">
                        {navLinksItems.map((t, i) => {
                            return (

                                <div key={i}>
                                    <a>{t.sublink}</a>
                                    <p>{t.description}</p>
                                </div>

                            )
                        })}
                    </div>

                </div>
                <div className="miro-nav-menu-new-option">
                    <h2>What's new</h2>
                    {whatsNewItem.map((t, i) => {
                        return (

                            <div key={i} className="miro-nav-menu-new-option-content">
                                <div></div>
                                <div>
                                    <a>{t.title}</a>
                                    <p>
                                        {t.description}
                                    </p>
                                </div>
                            </div>

                        )
                    })}

                    <a className="see-change">See changelog </a><span className="right-arrow">&rarr;</span>
                </div>
            </div>
            <hr />
            <div className="contact-sales"> <a href="" >Contact Sales </a><span className="right-arrow">&rarr;</span></div>
        </div>

    )
}
export default MiroNavMenu;