import React from "react";
import "./FullWidthDropdown.css";

const DropdownFooter = () => {
  return (
    <div className='dropdown-footer'>
      <a href=''>Contact sales</a>
      <a href=''>See Pricing</a>
    </div>
  );
};

const FeaturedCard = () => {
  return (
    <div className='featured-card'>
      <div className='card-img'>
        <img src='https://www.workstream.us/hubfs/Frame%20419.png' alt='' />
      </div>
      <div className='card-content'>
        <div className='tag'>GUID</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, vel!</p>
        <button className='read-more-btn'>
          <span> Read more </span>
          <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='hundred.dev' />
        </button>
      </div>
    </div>
  );
};

const ProductDropdown = () => {
  return (
    <div className='product-dropdown'>
      <div className='left-content'>
        <a href='#'>
          <div className='icon'>
            <img src='https://www.workstream.us/hubfs/Development%202022/Mega_Menu/hiring.png' alt='' />
          </div>
          <div className='content'>
            <h3>Hiring</h3>
            <p>Lorem ipsum dolor sit amet Voluptates, incidunt.</p>
          </div>
        </a>

        <a href='#'>
          <div className='icon'>
            <img src='	https://www.workstream.us/hubfs/Development%202022/Mega_Menu/onboarding.png' alt='' />
          </div>
          <div className='content'>
            <h3>Onboarding</h3>
            <p>Lorem ipsum dolor sit amet Voluptates, incidunt.</p>
          </div>
        </a>
      </div>
      <div className='right-content'>
        <div className='title'>FEATURED READES</div>
        <div className='featureds-card'>
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
      <DropdownFooter />
    </div>
  );
};

const SolutionsDropdown = () => {
  return (
    <div className='solutions-dropdown'>
      <div className='left-content'>
        <div className='title'>SOLUTIONS FOR</div>
        <div className='solutions-links'>
          <a href='#'>
            <span>Resturants</span>
            <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
          </a>
          <a href='#'>
            <span>Hospitality</span>
            <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
          </a>
          <a href='#'>
            <span>Automotive</span>
            <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
          </a>
          <a href='#'>
            <span>Healthcare</span>
            <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
          </a>
          <a href='#'>
            <span>Manufacturing</span>
            <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
          </a>
          <a href='#'>
            <span>Warehousing</span>
            <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
          </a>
          <a href='#'>
            <span>Retail</span>
            <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
          </a>
        </div>
      </div>
      <div className='right-content'>
        <div className='title'>FEATURED READES</div>
        <div className='featureds-card'>
          <FeaturedCard />
        </div>
      </div>

      <DropdownFooter />
    </div>
  );
};
const ResourcesDropdown = () => {
  return (
    <div className='resources-dropdown'>
      <div className='left-content'>
        <div>
          <div className='title'>LEARN</div>
          <div className='resources-links'>
            <a href='#'>
              <span>Blog</span>
              <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
            </a>
            <a href='#'>
              <span>Webinar</span>
              <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
            </a>
            <a href='#'>
              <span>Guides</span>
              <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
            </a>
            <a href='#'>
              <span>Podcast</span>
              <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
            </a>
            <a href='#'>
              <span> On the Clock Community</span>
              <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
            </a>
          </div>
        </div>
        <div>
          <div className='title'>CONNECT</div>
          <div className='resources-links'>
            <a href='#'>
              <span>Newsroom</span>
              <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
            </a>
            <a href='#'>
              <span>Contact Us</span>
              <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
            </a>
            <a href='#'>
              <span>Docs & Help Center</span>
              <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
            </a>
            <a href='#'>
              <span>Investors</span>
              <img src='./img/sections/navigations/fullWidthNav/caret-right.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='right-content'>
        <div className='title'>LATEST PODCAST</div>
        <div className='featureds-card'>
          <FeaturedCard />
        </div>
      </div>

      <DropdownFooter />
    </div>
  );
};

// links to render in navigation
const navLinks = [
  {
    linkName: "Why Workstream",
    link: "",
    id: "workstream",
  },
  {
    linkName: "Product",
    id: "product",
    dropdown: <ProductDropdown />,
  },
  {
    linkName: "Solutions",
    id: "solutions",
    dropdown: <SolutionsDropdown />,
  },
  {
    linkName: "Resources",
    id: "resources",
    dropdown: <ResourcesDropdown />,
  },
  {
    linkName: "Customers",
    id: "customers",
    link: "",
  },
  {
    linkName: "About",
    id: "about",
    link: "",
  },
];

const FullWidthDropdown = () => {
  const [isDropdown, setDropdown] = React.useState({
    isOpen: false,
    id: "",
  });
  const [isMobileTrigger, setMobileTrigger] = React.useState(false);

  const onMouseEnter = (id) => {
    setDropdown({ isOpen: true, id: id });
  };
  const onClickExpand = (id) => {
    if (isDropdown.isOpen) {
      setDropdown({ isOpen: false, id: "" });
    } else {
      setDropdown({ isOpen: true, id: id });
    }
  };

  const onMouseLeave = () => {
    setDropdown({ isOpen: false, id: "" });
  };
  const onClickHamburger = () => {
    setMobileTrigger(!isMobileTrigger);
  };
  return (
    <>
      <div className='section-navbar'>
        <div className='componay-logo'>
          <img src='https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/25274289/9426278c.png' alt='hundred.dev' />
        </div>
        <ul className='nav-links'>
          {navLinks.map((link, i) => {
            if (link.link) {
              return (
                <li key={i} className='link'>
                  <a href=''>{link.linkName}</a>
                </li>
              );
            } else {
              return (
                <li key={i} className={`link link-${i}`} onMouseEnter={() => onMouseEnter(link.id)} onMouseLeave={onMouseLeave}>
                  <span>{link.linkName}</span>
                  {/* <div className={`dropdown-menu `}>{link.dropdown}</div> */}

                  {link?.dropdown && (
                    <div className={`dropdown-menu ${isDropdown.id === link.id ? "dropdown-open" : "dropdown-close"}`}>{link.dropdown}</div>
                  )}
                </li>
              );
            }
          })}
          <hr />
        </ul>
        <div className='actions-btns'>
          <button className='signin-btn'>Sign in</button>
          <button className='contact-sales-btn'>Contact sales</button>
        </div>

        <div onClick={onClickHamburger} className={`hamburger ${isMobileTrigger ? "hamburger-open" : "hamburger-close"}`}>
          <div className='slice slice-1'></div>
          <div className='slice slice-2'></div>
          <div className='slice slice-3'></div>
        </div>
      </div>

      <ul className={`mobile-nav-links nav-links ${isMobileTrigger ? "mobile-menu-open" : "mobile-menu-close"}`}>
        {navLinks.map((link, i) => {
          return (
            <li key={i} className={`link link-${i}`} onClick={() => onClickExpand(link.id)}>
              <div>
                <span>{link.linkName}</span>
                {link.dropdown && (
                  <span>
                    <img src='./img/sections/navigations/fullWidthNav/plus.svg' alt='plus' />
                  </span>
                )}
              </div>
              {link?.dropdown && (
                <div className={`dropdown-menu ${isDropdown.id === link.id ? "mobile-submenu-open" : "mobile-submenu-close"}`}>
                  {link.dropdown}
                </div>
              )}
            </li>
          );
        })}

        <div className='actions-btns'>
          <button className='signin-btn'>Sign in</button>
          <button className='contact-sales-btn'>Contact sales</button>
        </div>
      </ul>
    </>
  );
};

export default FullWidthDropdown;
