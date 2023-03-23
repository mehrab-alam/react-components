import React from "react";
import "./NormalCardNav.css";

const NavChildrenOne = () => {
  return (
    <div className='nav-children nav-children-one' data-expand={false}>
      <a href='#'>
        <img src='https://assets.website-files.com/5fe2250e2f83cc02cbfefbcf/61f398b94d4ff4175ae06a7f_spot-symbol-24%402x.png' alt='icon' />
        <div className='text-content'>
          <div className='title'>Lorem, ipsum.</div>
          <div className='desc'>Lorem ipsum dolor sit.</div>
        </div>
      </a>
      <a href='#'>
        <img src='https://assets.website-files.com/5fe2250e2f83cc02cbfefbcf/61f398b94d4ff4175ae06a7f_spot-symbol-24%402x.png' alt='icon' />

        <div className='text-content'>
          <div className='title'>Lorem, ipsum.</div>
          <div className='desc'>Lorem ipsum dolor sit.</div>
        </div>
      </a>
      <a href='#'>
        <img src='https://assets.website-files.com/5fe2250e2f83cc02cbfefbcf/61f398b94d4ff4175ae06a7f_spot-symbol-24%402x.png' alt='icon' />

        <div className='text-content'>
          <div className='title'>Lorem, ipsum.</div>
          <div className='desc'>Lorem ipsum dolor sit.</div>
        </div>
      </a>
      <a href='#'>
        <img src='https://assets.website-files.com/5fe2250e2f83cc02cbfefbcf/61f398b94d4ff4175ae06a7f_spot-symbol-24%402x.png' alt='icon' />

        <div className='text-content'>
          <div className='title'>Lorem, ipsum.</div>
          <div className='desc'>Lorem ipsum dolor sit.</div>
        </div>
      </a>
      <a href='#'>
        <img src='https://assets.website-files.com/5fe2250e2f83cc02cbfefbcf/61f398b94d4ff4175ae06a7f_spot-symbol-24%402x.png' alt='icon' />

        <div className='text-content'>
          <div className='title'>Lorem, ipsum.</div>
          <div className='desc'>Lorem ipsum dolor sit.</div>
        </div>
      </a>
    </div>
  );
};
const NavChildrenTwo = () => {
  return (
    <div className='nav-children nav-children-two'>
      <h3 className='nav-children-title'>BY INDUSTRY</h3>
      <a href='#'>
        <img src='https://assets.website-files.com/5fe2250e2f83cc02cbfefbcf/61f3a1920fb8bc15a1588cb5_browser-24%402x.png' alt='icon' />
        <div className='title'>Lorem, ipsum 2.</div>
      </a>
      <a href='#'>
        <img src='https://assets.website-files.com/5fe2250e2f83cc02cbfefbcf/61f3a1920fb8bc15a1588cb5_browser-24%402x.png' alt='icon' />
        <div className='title'>Lorem, ipsum 2.</div>
      </a>
      <a href='#'>
        <img src='https://assets.website-files.com/5fe2250e2f83cc02cbfefbcf/61f3a1920fb8bc15a1588cb5_browser-24%402x.png' alt='icon' />
        <div className='title'>Lorem, ipsum 2.</div>
      </a>
      <a href='#'>
        <img src='https://assets.website-files.com/5fe2250e2f83cc02cbfefbcf/61f3a1920fb8bc15a1588cb5_browser-24%402x.png' alt='icon' />
        <div className='title'>Lorem, ipsum 2.</div>
      </a>
      <a href='#'>
        <img src='https://assets.website-files.com/5fe2250e2f83cc02cbfefbcf/61f3a1920fb8bc15a1588cb5_browser-24%402x.png' alt='icon' />
        <div className='title'>Lorem, ipsum 2.</div>
      </a>
    </div>
  );
};

const NavChildrenThree = () => {
  return (
    <div className='nav-children nav-children-three'>
      <div>
        <h3 className='nav-children-title'>PARTNERS</h3>
        <a href='#'>
          <div className='link-title'>Lorem, ipsum dolor.</div>
          <div className='link-desc'>Lorem ipsum dolor sit amet consectetur.</div>
        </a>
        <a href='#'>
          <div className='link-title'>Lorem, ipsum dolor.</div>
          <div className='link-desc'>Lorem ipsum dolor sit amet consectetur.</div>
        </a>
      </div>
      <div>
        <h3 className='nav-children-title'>SUPPORT</h3>
        <a href='#'>
          <div className='link-title'>Lorem, ipsum dolor.</div>
          <div className='link-desc'>Lorem ipsum dolor sit amet consectetur.</div>
        </a>
        <a href='#'>
          <div className='link-title'>Lorem, ipsum dolor.</div>
          <div className='link-desc'>Lorem ipsum dolor sit amet consectetur.</div>
        </a>
      </div>
      <div>
        <h3 className='nav-children-title'>RESOURCE CENTER</h3>
        <div>
          <a href='#'>Blog</a>
          <a href='#'>Customer Stories</a>
          <a href='#'>Virtual Events</a>
          <a href='#'>Products Tours</a>
        </div>
      </div>
    </div>
  );
};

// links to render in navigation
const navLinks = [
  {
    linkName: "Video Intelligence",
    link: "#",
    id: "videoIntelligence",
  },
  {
    linkName: "Camera System",
    id: "cameraSystem",
    dropdown: <NavChildrenOne />,
  },
  {
    linkName: "Solutions",
    id: "solutions",
    dropdown: <NavChildrenTwo />,
  },
  {
    linkName: "Pricing",
    id: "pricing",
    link: "#",
  },
  {
    linkName: "Resources",
    id: "resources",
    dropdown: <NavChildrenThree />,
  },
];

const NormalCardNav = () => {
  const [isMobileTrigger, setMobileTrigger] = React.useState(false);
  const [isSubmenu, setSubmenu] = React.useState({
    isOpen: false,
    id: "",
  });

  const onExpandSubmenu = (id) => {
    if (isSubmenu.id === id) {
      setSubmenu({ isOpen: false, id: "" });
    } else {
      setSubmenu({ isOpen: true, id: id });
    }
  };

  const onClickHamburger = () => {
    setMobileTrigger(!isMobileTrigger);
  };
  return (
    <>
      <header className='simple-cardnav-wrapper'>
        <div className='header-content'>
          <div className='company-logo'>
            <img src='https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/25274289/9426278c.png' alt='hundred.dev' />
          </div>
          <nav className='nav-links'>
            {navLinks.map((link, i) => {
              return (
                <a href={link.link} key={i}>
                  {link.linkName}
                  {link.dropdown && link.dropdown}
                </a>
              );
            })}
            <hr />
          </nav>
          <div onClick={onClickHamburger} className={`hamburger ${isMobileTrigger ? "hamburger-open" : "hamburger-close"}`}>
            <div className='slice slice-1'></div>
            <div className='slice slice-2'></div>
            <div className='slice slice-3'></div>
          </div>
          <div className='actions-btns'>
            <button className='login-btn'>Login</button>
            <button className='book-demo-btn'>Book a Demo</button>
          </div>
        </div>
      </header>

      <nav className={`mobile-links ${isMobileTrigger ? "mobile-links-open" : "mobile-links-close"}`}>
        {navLinks.map((link, i) => {
          return (
            <a href={link.link} key={i}>
              <div> {link.linkName}</div>
              {link.dropdown && (!isSubmenu.isOpen || isSubmenu.id != link.id) && (isSubmenu.isOpen || isSubmenu.id !== link.id) && (
                <img onClick={() => onExpandSubmenu(link.id)} src='./img/sections/navigations/normalCardNav/plus.svg' alt='Iocn' />
              )}
              {link.dropdown && isSubmenu.isOpen && isSubmenu.id === link.id && (
                <img onClick={() => onExpandSubmenu(link.id)} src='./img/sections/navigations/normalCardNav/minus.svg' alt='Iocn' />
              )}
              {isSubmenu.id === link.id && (
                <div className={`submenu ${isSubmenu.isOpen ? "submenu-open" : "submenu-close"}`}> {link.dropdown && link.dropdown}</div>
              )}
            </a>
          );
        })}

        <div className='actions-btns'>
          <button className='login-btn'>Login</button>
          <button className='book-demo-btn'>Book a Demo</button>
        </div>
      </nav>
    </>
  );
};

export default NormalCardNav;
