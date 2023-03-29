import "./BlueSimple.css";
import "./BlueSimpleResponsive.css"
import React from "react";
import { featureItem, browsFeature } from "./Features";



const Feature = () => (
  <div className='features'>
    <div className='features-option'>
      <ul className='features-option-item'>
        {featureItem.map((t, i) => {
          return (
            <>
              <li key={i}>
                <div>
                  <img src={t.img} alt='' />
                </div>
                <div>
                  <div>{t.title}</div>
                  <p>{t.description}</p>
                </div>
              </li>
            </>
          )
        })}
      </ul>

      <ul>
        {browsFeature.map((k, i) => {
          return (
            <>
              <li key={i}>
                <div>{k.title}</div>
              </li>
            </>
          )
        })}
      </ul>
    </div>
    <div className='feature-footer'>
      <div className='ready-started'>
        <div>Ready to get started?</div>
        <div>Take your documents to the next level with Nulis</div>
      </div>
      <div className='demo-video'>Watch demo</div>
    </div>
  </div>
);

const BlueSimple = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [isHamburger, setHamburger] = React.useState(false);
  const [isFeatureActive, setFeatueActive] = React.useState(false);


  return (
    <div className="blue-simple-container">
      <div className='blue-simple'>
        <nav className='blue-simple-nav'>
          <img src={"./img/sections/navigations/BlueSimple/file-react.svg"} alt='' />
          <a href='' className='features'>
            <div
              onClick={(e) => {
                e.preventDefault();
                setOpen(!isOpen);
              }}>
              <span className={`features-title ${isOpen ? "features-menu-active" : "features-menu-inactive"}`}>Features</span>
              <div className="feature-menu"> {isOpen && <Feature />}</div>
            </div>

          </a>
          <a href=''>Downloads</a>
          <a href=''>Resources</a>
          <a href=''>Company</a>
        </nav>
      </div>
      <div className="responsive-blue-simple">
        <nav className="responsive-blue-simple-nav">
          <img src="./img/sections/navigations/BlueSimple/file-react.svg" alt="" />
          <div className={`hamburger ${isHamburger ? "hamburger-open" : "hamburger-close"}`} onClick={() => {
            if (isHamburger) {
              setFeatueActive(false)
            }
            setHamburger(!isHamburger)
          }}>
            <div className="slice slice-1"></div>
            <div className="slice slice-2"></div>
            <div className="slice slice-3"></div>
          </div>
        </nav>
        <div className={`sub-nav-list-menu ${isHamburger ? "sub-nav-open" : "sub-nav-close"}`}>
          <div onClick={() => {
            setFeatueActive(!isFeatureActive)
          }}>Features</div>
          <div>{featureItem.map((t, i) => {
            return (
              <>
                <div className={`sub-featur-list ${isFeatureActive ? "feature-active" : "feature-inactive"}`} key={i}>
                  <img src={t.img} alt="" />
                  <div>
                    <div>{t.title}</div>
                    <div>{t.description}</div>
                  </div>
                </div>
              </>
            )
          })}</div>
          <div>Downloads</div>
          <div>Resources</div>
          <div>Company</div>

        </div>
      </div>
    </div>
  );

};

export default BlueSimple;
