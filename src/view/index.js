import React from 'react';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import FormField from 'components/FormField';

export default function Profile() {
  return (
    <div className="wrapper">
      <div className="container bg-white">
        <Header />
        <main className="main">
          <Sidebar />
          <section className="content">
            <h6 className="content-header mb-3">My profile</h6>
            <div className="profile">
              <div className="profile__details-left">
                <div className="profile__img-upload">
                  <img
                    src="https://picsum.photos/200"
                    alt="user"
                    className="rounded-circle profile-img"
                  />
                  <small className="mt-1">Photo</small>
                </div>
              </div>
              <div className="profile__details-right">
                <form action="#">
                  <FormField id="firstName" />
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
