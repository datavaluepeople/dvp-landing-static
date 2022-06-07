/**
 * Burger menu
 * Inspiration from:
 * https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
 */
import React from 'react';
import PropTypes from 'prop-types';

import * as burgerStyles from './burger.module.scss';

const Burger = ({isHome, isOpen, toggleMenuOpen}) => {
  return (
    <button
      className={`
        ${burgerStyles.burger}
        ${isHome ? burgerStyles.home : ''}
        ${isOpen ? burgerStyles.cross : ''}
      `}
      onClick={() => toggleMenuOpen()}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

export default Burger;

Burger.propTypes = {
  isHome: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggleMenuOpen: PropTypes.func,
};
