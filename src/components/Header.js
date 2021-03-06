// @flow

import React from 'react';

import type { Node } from 'react';

import { Link } from 'react-router-dom';

import ICON from 'constants/icons';

export default function Header(): Node {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={ICON.logo} alt="logo" />
        </Link>
      </div>
      <nav className="flex-auto">
        <ul className="header__nav style-none">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link decoration-none">
              <img
                src={ICON.shoppingList}
                alt="shopping list"
                className="icon-md"
              />
              <small className="mt-1">Shopping list</small>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link decoration-none">
              <img src={ICON.cart} alt="my cart" className="icon-md" />
              <small className="mt-1">My cart</small>
              <span className="icon-count">2</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link decoration-none">
              <img
                src={ICON.navigationPerson}
                alt="sign in"
                className="icon-md"
              />
              <small className="mt-1">Sign in</small>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
