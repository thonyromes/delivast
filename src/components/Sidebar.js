// @flow

import React from 'react';

import type { Node } from 'react';

import { Link } from 'react-router-dom';

import ICON from 'constants/icons';

export default function Sidebar(): Node {
  return (
    <aside className="sidebar">
      <nav className="mb-5">
        <ul className="style-none">
          <li className="sidebar__nav-item">
            <Link to="/orders" className="sidebar__nav-link decoration-none">
              <img src={ICON.shoppingBag} alt="orders" className="icon-md" />
              <small className="ml-2">My orders</small>
            </Link>
          </li>
          <li className="sidebar__nav-item">
            <Link
              to="/shopping-list"
              className="sidebar__nav-link decoration-none"
            >
              <img
                src={ICON.shoppingList}
                alt="shopping list"
                className="icon-md"
              />
              <small className="ml-2">Shopping list</small>
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="style-none">
          <li className="sidebar__nav-item">
            <Link
              to="/profile"
              className="sidebar__nav-link decoration-none active"
            >
              <img
                src={ICON.navigationPerson}
                alt="profile"
                className="icon-md"
              />
              <small className="ml-2">My profile</small>
            </Link>
          </li>
          <li className="sidebar__nav-item">
            <Link to="/addresses" className="sidebar__nav-link decoration-none">
              <img src={ICON.location} alt="location" className="icon-md" />
              <small className="ml-2">Addresses</small>
            </Link>
          </li>
          <li className="sidebar__nav-item">
            <Link to="/contacts" className="sidebar__nav-link decoration-none">
              <img src={ICON.contact} alt="contact" className="icon-md" />
              <small className="ml-2">Contacts</small>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
