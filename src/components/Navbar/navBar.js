/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">LOGO</h1>
        <i className="fa-solid fa-bars" />
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? (
            <div><FaTrashAlt /></div>
          ) : <div><FaEdit /></div>}
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-links"> Page 1</li>
          <li className="nav-links"> Page 1</li>
          <li className="nav-links"> Page 1</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
