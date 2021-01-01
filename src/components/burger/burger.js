/**
 * Burger menu
 * Inspiration from:
 * https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
 */
import React from 'react';
import PropTypes from 'prop-types';

import burgerStyles from './burger.module.scss';

const Burger = ({isHome, toggleMenuOpen}) => {
  return (
    <button
      className={`
        ${burgerStyles.burger}
        ${isHome ? burgerStyles.light : burgerStyles.dark}
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
  isHome: PropTypes.boolean,
  toggleMenuOpen: PropTypes.function,
};
