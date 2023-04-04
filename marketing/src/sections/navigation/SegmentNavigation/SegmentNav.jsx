import './SegmentNav.css';
import React from 'react';
import './SegmentResponsive.css';
import { featureProduct, productBarMenu, webProductItems, segmentProductMenu } from './SegmentProductMenu';

const SegmentNav = () => {
    const [isOpen, modifystate] = React.useState(false)
    const [isHamburger, setHamburger] = React.useState(false)
    const [isArrorOpen, setArrorOpen] = React.useState(false)
    const [isProductMenu, setProductMenu] = React.useState(false)
    return (
        <>
            <nav className='segment-navigation'>
                <div className='heading'>
                    <img src="./img/sections/navigations/SegmentNav/logo.svg" alt="logo" />
                    <h9>Segment</h9>
                </div>
                <div className='features'>
                    <a href="" className="lists">
                        <div onClick={(e) => {
                            e.preventDefault();
                            modifystate(!isOpen)
                        }}>
                            <span className='product-anchor-tag'>Product</span>
                            <div className={`productBtn ${isOpen ? "open-product" : "close-product"}`} >
                                <h1 className='segment-heading'>SEGMENT FOR...</h1>
                                <div className='segment-product'>
                                    <div className='all-product-menu'>
                                        {webProductItems.map((t, i) => {
                                            return (
                                                <div>
                                                    <div key={i} className='productMenu'>
                                                        <img src={t.img} />
                                                        <div>
                                                            <h1>{t.title}</h1>
                                                            <p>{t.author}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <div>
                                            <h1 className='product-heading'>PRODUCTS</h1>
                                            <div >
                                                {productBarMenu.map((t, i) => {
                                                    return (
                                                        <div>
                                                            <div key={i} className='productMenu'>
                                                                <img src={t.img} />
                                                                <div>
                                                                    <h1>{t.title}</h1>
                                                                    <p>{t.author}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                    </div>

                                    <div className='items'>
                                        <span>FEATURES</span>
                                        <div className='secondBar'>
                                            {featureProduct.map((t, i) => {
                                                return (
                                                    <div className='featuresItems'>
                                                        <div key={i} className='featureList'>
                                                            <img src={t.img} />
                                                            <div>
                                                                <h1>{t.title}</h1>
                                                                <p>{t.author}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                        <hr />
                                        <div className='lastItem'>
                                            <img src='./img/sections/navigations/SegmentNav/catalog.svg' alt="" />
                                            <div>
                                                <h1>Catalog</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                        <div className='lastItem'>
                                            <img src='./img/sections/navigations/SegmentNav/segment.svg' alt="" />
                                            <div>
                                                <h1>Twilio + Segment</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="#sub">Pricing</a>
                    <a href="#sub">Customers</a>
                    <a href="#sub">Docs</a>
                    <a href="#sub">Company</a>
                </div>
                <div className='nav-btn'>
                    <a href="">Log in</a>
                    <button>See How it works</button>

                </div>
                <div className={`hamburger ${isHamburger ? "open-hamburger" : "close-hamburger"}`}
                    onClick={() => setHamburger(!isHamburger)}
                >
                    <div className="slice slice-1"></div>
                    <div className="slice slice-2"></div>
                    <div className="slice slice-3"></div>
                </div>
            </nav >

            <div className={`mobile-product-list ${isHamburger ? "sub-product-active" : "sub-product-deactive"}`}>
                <div className='mob-product-menu-list' >
                    <span onClick={() => {
                        setProductMenu(!isProductMenu)
                    }}   ><p2>Product</p2>
                        <img onClick={() => {
                            setArrorOpen(!isArrorOpen)
                        }} className={`product-arrow-menu ${isArrorOpen ? "open-arror" : "close-arrow"}`} src="./img/sections/navigations/SegmentNav/right-arrow.svg" alt="" />
                    </span>
                    <div className='product-mob-all-list'>
                        <p>SEGMENT FOR...</p>
                        {segmentProductMenu.map((t, i) => {
                            return (
                                <div key={i} className={`inside-product-menu-list ${isProductMenu ? "open-product-list" : "close-product-list"}`}>
                                    <div className='product-mob-list'>
                                        <div className='all-menu'>
                                            <img src={t.img} alt="" />
                                            <h1>{t.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <p>PRODUCTS</p>
                        {productBarMenu.map((t, i) => {
                            return (
                                <div key={i} className={`inside-product-menu-list ${isProductMenu ? "open-product-list" : "close-product-list"}`}>
                                    <div className='product-mob-list'>
                                        <div className='all-menu'>
                                            <img src={t.img} alt="" />
                                            <h1>{t.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <a href="#sub">Pricing</a>
                <a href="#sub">Customers</a>
                <a href="#">Docs</a>
                <a href="#">Company</a>
            </div>
        </>
    )
};
export default SegmentNav;
