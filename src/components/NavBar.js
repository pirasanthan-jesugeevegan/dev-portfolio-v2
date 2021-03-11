import React from 'react';
import '../theme/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faUser,
  faCog,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/PJ.png';
library.add(faHome, faUser, faCog, faFileCode);
const navData = [
  {
    href: '#home',
    hint: 'Home',
    icon: 'home',
    current: 'current',
  },
  {
    href: '#about',
    hint: 'About',
    icon: 'user',
  },
  {
    href: '#skill',
    hint: 'Skills',
    icon: 'cog',
  },
  {
    href: '#portfolio',
    hint: 'Portfolio',
    icon: 'file-code',
  },
  {
    href: '#portfolio',
    hint: 'Portfolio',
    icon: 'file-code',
  },
  {
    href: '#portfolio',
    hint: 'Portfolio',
    icon: 'file-code',
  },
];
navData.map((datas) => {
  console.log(datas.icon);
});
function NavBar() {
  return (
    <>
      <div className="cm-navigation">
        <div className="cm-navigation-inner">
          <div className="navigation-header">
            <a className="btn responsive-menu"></a>
            <div className="custom-logo">
              <a href="index.html">
                <img style={{ width: '50px' }} src={Logo} />
              </a>
            </div>
          </div>
          <div className="cm-navigation-content">
            <ul className="nav navbar-nav">
              {navData.map((data, index) => (
                <li key={index} className={data.current}>
                  <a href={data.href} data-hint={data.hint}>
                    <FontAwesomeIcon icon={data.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
