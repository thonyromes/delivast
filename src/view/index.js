// @flow

import React from 'react';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

export default function Profile() {
  return (
    <div className="wrapper">
      <div className="container bg-white">
        <Header />
        <main className="main">
          <Sidebar />
          <section className="content">
            <h6 className="content-header">My profile</h6>
            <div className="profile-details">
              <div>Todo</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
