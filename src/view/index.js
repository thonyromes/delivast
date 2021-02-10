import React, { useState, useEffect, useRef } from 'react';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import FormField from 'components/FormField';

import { getProfile } from 'api';

export default function Profile() {
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    picture: '',
  });

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    const handleFetchProfile = async () => {
      try {
        const profileData = await getProfile();

        if (!isMounted) return;

        profileData.results.forEach((user, ind) => {
          setFormFields({
            firstName: user.name.first,
            lastName: user.name.last,
            email: user.email,
            phone: user.phone,
            picture: user.picture.medium,
          });
        });
      } catch (e) {
        console.log(e);
      }
    };

    handleFetchProfile();

    return () => {
      isMounted.current = false;
      return handleFetchProfile;
    };
  }, []);

  const canSubmit = Object.values(formFields).every((field) => field !== '');

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <main className="main">
          <Sidebar />
          <section className="content">
            <h6 className="content-header mb-3">My profile</h6>
            <div className="profile">
              <div className="profile__details-left">
                <div className="profile__img-upload">
                  <img
                    src={formFields.picture}
                    alt="user"
                    className="rounded-circle profile-img"
                  />
                  <small className="upload-text">Photo</small>
                </div>
              </div>
              <div className="profile__details-right">
                <form action="#" method="post">
                  <div className="mb-3">
                    <FormField
                      type="text"
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      value={formFields.firstName}
                      onChange={setFormFields}
                    />
                  </div>
                  <div className="mb-3">
                    <FormField
                      type="text"
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      value={formFields.lastName}
                      onChange={setFormFields}
                    />
                  </div>
                  <div className="mb-3">
                    <FormField
                      type="email"
                      id="email"
                      name="email"
                      label="Email"
                      value={formFields.email}
                      onChange={setFormFields}
                    />
                  </div>
                  <div className="mb-3">
                    <FormField
                      type="phone"
                      id="phone"
                      name="phone"
                      label="Phone number"
                      value={formFields.phone}
                      onChange={setFormFields}
                    />
                  </div>
                  <div className="mt-4 align-right">
                    <button
                      type="submit"
                      className={`btn btn--primary ${
                        canSubmit ? undefined : 'not-allowed'
                      }`}
                      disabled={!canSubmit}
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
