/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
import { useRef, React } from 'react';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import UilHome from '@iconscout/react-unicons/icons/uil-estate';
import UilAbout from '@iconscout/react-unicons/icons/uil-user';
import UilRandom from '@iconscout/react-unicons/icons/uil-smile-beam';
import UilHamburgerMenu from '@iconscout/react-unicons/icons/uil-bars';
import UilClose from '@iconscout/react-unicons/icons/uil-times';

import HomePage from './homePage';
import WorksFeed from './worksFeed';
import AboutMe from './aboutMe';
import RandomMe from './randomMe';
// import Veridium from './veridium';

function App(props) {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorksFeed />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/random" element={<RandomMe />} />
          {/* <Route path="/work/veridium" element={<Veridium />} /> */}
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </Router>
  );
}

function Nav(props) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        {/* <img className="nav__logo" src="main-logo.png" alt="" /> */}

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list__grid">
            <li className="nav__item">
              <div className="nav__link">
                <UilHome className="nav__icon" />
                <NavLink to="/work">WORK</NavLink>
              </div>
            </li>
            <li className="nav__item">
              <div className="nav__link">
                <UilAbout className="nav__icon" />
                <NavLink to="/about">ABOUT ME</NavLink>
              </div>
            </li>
            <li className="nav__item">
              <div className="nav__link">
                <UilRandom className="nav__icon" />
                <NavLink className="nav__link" to="/random">RANDOM</NavLink>
              </div>
            </li>
          </ul>
          <UilClose className="nav__close" id="nav-close" />
        </div>
        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle">
            <UilHamburgerMenu />
          </div>
        </div>
      </nav>
    </header>
  // <header>
  //   <h3>Logo</h3>
  //   <nav ref={navRef}>
  //     <a href="/#">Home</a>
  //     <a href="/#">Home</a>
  //     <a href="/#">Home</a>
  //     <button className="nav-btn nav-close-btn" onClick={showNavbar}>
  //       <UilClose />
  //     </button>
  //   </nav>
  //   <button className="nav-btn" onClick={showNavbar}>
  //     <UilHamburgerMenu />
  //   </button>
  // </header>
  );
}

function FallBack(props) {
  return <div>Page not found </div>;
}

export default App;
