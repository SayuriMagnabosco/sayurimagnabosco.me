/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import WorksFeed from './worksFeed';
import AboutMe from './aboutMe';
import RandomMe from './randomMe';
import Veridium from './veridium';

function App(props) {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/work" element={<WorksFeed />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/random" element={<RandomMe />} />
          <Route path="/work/veridium" element={<Veridium />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </Router>
  );
}

function Nav(props) {
  return (
    <header>
      <nav>
        <ul>
          <img className="logo-img" src="main-logo.png" alt="" />
          <div className="other-pages">
            <NavLink className="animal-cat" to="/work">WORK</NavLink>
            <NavLink className="animal-cat" to="/about">ABOUT ME</NavLink>
            <NavLink to="/random">RANDOM</NavLink>
          </div>
        </ul>
      </nav>
    </header>
  );
}

function FallBack(props) {
  return <div>Page not found </div>;
}

export default App;
