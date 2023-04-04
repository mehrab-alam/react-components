import './ClickupNav.css';
import React from 'react';
import './ClickupResponsive.css';
import { webProductMenuFirst, webProductMenuSecond, webProductMenuThird, webProductMenuFour, productSubList } from './ProductList';

const NavclickUp = () => {
    const [isOpen, modifystate] = React.useState(false)
    const [isHamburger, setHamburger] = React.useState(false)
    const [isSubNavActive, setSubNavActive] = React.useState(false)
    const [isArrowOpen, setArrowOpen] = React.useState(false)
    const [isWebProductOpen, setWebProductOpen] = React.useState(false)

    return (
        <>
            <nav className='nav-clickup'>
                <div>
                    <img src='./img/sections/navigations/ClickupNav/click.png' alt="design" />
                    <h1 className='h1-nav-clickup'>ClickUp</h1>
                </div>
                <div className='web-full-product-menu'>
                    <div className={`features ${isOpen ? 'open-feature' : ''}`}>
                        <span onMouseOver={() => {
                            setWebProductOpen(!isWebProductOpen)
                        }}>Product <img className={`arrowBar ${isWebProductOpen ? "open-arrow" : "close-arrow"}`} src="./img/sections/navigations/ClickupNav/down-arrow.svg" alt="" />
                        </span>

                    </div>
                    <div className={`webProduct ${isWebProductOpen ? "open-product" : "close-product"}`}>
                        <div className={`web-product-menu-List ${isArrowOpen ? "open-menu" : "close-menu"}`}>
                            <span className='web-product-heading'>PRODUCTS</span>
                            <h15 className='newTag'>NEW</h15>
                            <div className='web-header'>
                                <div className='web-header-logo'>
                                    <img className='img-header' src='./img/sections/navigations/ClickupNav/click.png' alt="logo" />
                                    <span4 className="clickup-headline">ClickUp</span4><p2>3.0</p2>
                                </div>
                                <div className='web-header-sentence'>
                                    Unlock the next generation of productivity<p3> →</p3>
                                </div>
                            </div>

                            <div className='first-product-option'>
                                {webProductMenuFirst.map((t, i) => {
                                    return (
                                        <div key={i} className="first-web-nav-list">
                                            <div className='first-web-product-list' >
                                                <img className='web-img-list' src={t.img} alt="task" />
                                                <div>
                                                    <h1>{t.title}</h1>
                                                    <p>{t.author}</p>
                                                    <p>{t.author}</p>
                                                </div> </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='second-product-option'>
                                {webProductMenuSecond.map((t, i) => {
                                    return (
                                        <div key={i} className="second-web-nav-list">
                                            <div className='second-web-product-list' >
                                                <img className='web-img-list' src={t.img} alt="task" />
                                                <div>
                                                    <h1>{t.title}</h1>
                                                    <p>{t.author}</p>
                                                    <p>{t.author}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='product-btn'>See All Features <img className='feature-arrow' src='./img/sections/navigations/ClickupNav/right-arrow.svg' /></div>
                        </div>
                        <hr className='hrLine' />
                        <div className='secondListItems'>
                            <div className='features-item'>
                                <div>
                                    <span className='feature-heading'>PLATFORM</span>
                                    {webProductMenuThird.map((t, i) => {
                                        return (
                                            <div key={i} className="third-web-nav-list">
                                                <div className='third-web-product-list' >
                                                    <img className='web-img-list' src={t.img} alt="task" />
                                                    <div>
                                                        <h1>{t.title}</h1>
                                                        <p>{t.author}</p>
                                                        <p>{t.author}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='features-last-items'>
                                    {webProductMenuFour.map((t, i) => {
                                        return (
                                            <>
                                                <div key={i} className="last-web-nav-list">
                                                    <div className='last-web-product-list' >
                                                        <img className='web-img-list' src={t.img} alt="task" />
                                                        <div>
                                                            <h1>{t.title}</h1>
                                                            <p>{t.author}</p>
                                                            <p>{t.author}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>


                    </div>

                </div>

                <a href="#sub">Solution</a>
                <a href="#sub">Learn</a>
                <a href="#sub">Pricing</a>
                <a href="#">Enterprises</a>
                <a className='contact' href="#">Contact Sales</a>
                <div className='buttons'>
                    <button className='sign-btn-nav'>Sign Up</button>
                    <button className='log-btn-nav'>Log in</button>
                </div>
                <div className={`hamburger ${isHamburger ? "open-hamburger" : "close-hamburger"}`}
                    onClick={() => setHamburger(!isHamburger)} >
                    <div className='slice slice-1'></div>
                    <div className='slice slice-2'></div>
                    <div className='slice slice-3'></div>
                </div>
            </nav >
            <div className={`mobile-nav-links ${isHamburger ? "sub-nav-link-active" : "sub-nav-link-deactive"}`}>
                <div href="#">
                    <span className='product-main-mob-link' onClick={() => {
                        setSubNavActive(!isSubNavActive)
                    }}><p8>Product</p8>
                        <img onClick={() => {
                            setArrowOpen(!isArrowOpen)
                        }} className={isArrowOpen ? "product-open-arrow" : "close"} src='./img/sections/navigations/ClickupNav/arrow.svg' alt="" />
                        <div className={`mob-product-menu-List ${isArrowOpen ? "open-menu" : "close-menu"}`}>
                            <span className='newTag'>new</span>
                            <div className='mob-header'>
                                <div className='mob-header-logo'>
                                    <img className='img-header' src='./img/sections/navigations/ClickupNav/click.png' alt="logo" />
                                    <p4>ClickUp</p4><p2>3.0</p2>
                                </div>
                                <div className='mob-header-sentence'>
                                    See What's New<p3> →</p3>
                                </div>
                            </div>
                        </div>
                    </span>
                    {productSubList.map((t, i) => {
                        return (
                            <>
                                <div key={i} className={`sub-nav-list ${isSubNavActive ? "sub-list-open" : "sub-list-close"}`}>
                                    <div className='mob-product-list' >
                                        <img className='mob-img-list' src={t.img} alt="task" />
                                        <h1>{t.title}</h1>
                                    </div>
                                    <hr />
                                </div>
                            </>
                        )
                    })}
                </div>
                <a href="#sub">Learn</a>
                <a href="#sub">Pricing</a>
                <a href="#">Enterprises</a>
                <a href="#">Contact sales</a>
                <button className='mob-sign-btn'>Sign Up</button>
            </div>

        </>

    );
}
export default NavclickUp;

