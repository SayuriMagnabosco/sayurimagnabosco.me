import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import App from './components/app';

// this creates the store with the reducers
const store = configureStore({
  reducer: rootReducer,
});

const root = createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// /*= =================== MENU SHOW & HIDDEN ==================== */
// const navMenu = document.getElementById('nav-menu');
// const navToggle = document.getElementById('nav-toggle');
// const navClose = document.getElementById('nav-close');

// // menu show:
// if (navToggle) {
//   navToggle.addEventListener('click', () => {
//     navMenu.classList.add('show-menu');
//   });
// }

// // menu hidden:
// if (navClose) {
//   navClose.addEventListener('click', () => {
//     navMenu.classList.remove('show-menu');
//   });
// }

// /*= =================== REMOVES MENU MOBILE ==================== */
// const navLink = document.querySelectorAll('.nav__link');

// function linkAction() {
//   // eslint-disable-next-line no-shadow
//   const navMenu = document.getElementById('nav-menu');
//   navMenu.classList.remove('show-menu');
// }
// navLink.forEach((n) => n.addEventListener('click', linkAction));
